#!/usr/bin/env node
const FontName = require("fontname")
const path = require("path")
const fs = require("fs")

const run = function({ fontPath }) {
  const installFrom = path.resolve(__dirname, fontPath)
  const fileName = path.basename(installFrom)
  const installTo = path.resolve(__dirname, "../static", fileName)
  console.log({ installFrom, installTo })
  fs.copyFileSync(installFrom, installTo)
  console.log(`${installFrom} was moved to ${installTo}`)
  var data = fs.readFileSync(installTo)
  try {
    const fontMeta = FontName.parse(data)[0]
    console.log(fontMeta)
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
