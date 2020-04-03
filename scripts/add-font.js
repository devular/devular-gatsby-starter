#!/usr/bin/env node
const FontName = require("fontname")
const path = require("path")
const fs = require("fs")
const fontsFolder = path.resolve(__dirname, "../static/fonts")

const fontFaceTemplate = (family, fileName, bold, italic) => `
@font-face {
  font-family: "${family}";
  src: url("${fileName}");
  font-weight: ${bold ? "bold" : "normal"};
  font-style: ${italic ? "italic" : " normal"};
}`

const createAutoFontsCSS = ({ fonts }) => `
/* Automatically generated file - DO NOT EDIT */
${fonts
  .map(font =>
    fontFaceTemplate(font.postScriptName, font.fileName, font.bold, font.italic)
  )
  .join("")}
`

const configureStyleAndWeight = function(fontSubfamily) {
  const typeWeightIndicators = fontSubfamily.toLowerCase().split(" ")
  return {
    bold: Boolean(
      typeWeightIndicators.filter(candidate => candidate === "bold").length
    ),
    italic: Boolean(
      typeWeightIndicators.filter(candidate => candidate === "italic").length
    ),
  }
}

const addToFontConfig = function({ postScriptName, fontSubfamily }, fileName) {
  const styleAndWeight = configureStyleAndWeight(fontSubfamily)
  var fontConfigPath = path.resolve(fontsFolder, "font-config.json")
  var fontCSSPath = path.resolve(fontsFolder, "auto-fonts.css")
  var config = require(fontConfigPath)
  config.fonts.push({
    postScriptName,
    fontSubfamily,
    fileName,
    ...styleAndWeight,
  })
  fs.writeFileSync(fontConfigPath, JSON.stringify(config, null, 2))
  const cssString = createAutoFontsCSS(config)
  fs.writeFileSync(fontCSSPath, cssString)
}

const run = function({ fontPath }) {
  const installFrom = path.resolve(__dirname, fontPath)
  const fileName = path.basename(installFrom)
  const installTo = path.resolve(fontsFolder, fileName)
  console.log({ installFrom, installTo })
  fs.copyFileSync(installFrom, installTo)
  console.log(`${installFrom} was moved to ${installTo}`)
  var data = fs.readFileSync(installTo)
  try {
    const fontMeta = FontName.parse(data)[0]
    addToFontConfig(fontMeta, fileName)
  } catch (e) {
    console.error({ e })
  }
}

require("yargs")
  .scriptName("add-font")
  .usage("$0 <cmd> [args]")
  .command(
    "install",
    "install a font into Theme UI and Gatsby",
    yargs => {
      yargs.positional("fontPath", {
        alias: "-p",
        type: "string",
        describe: "the path of the font you want to add",
      })
    },
    function(argv) {
      run(argv)
    }
  )
  .help().argv
