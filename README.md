<h1 align="center">
  Devular's Gatsby Starter
</h1>

## 🧥 Bespoke Features

This Gatsby starter comes with a few features tailored to our particular needs, but we imagine a few other people will have had the same issues, hopefully it's useful to someone!

> Much of this work was done by [@leonoragilmour](https://github.com/leonoragilmour) in another project, and shamelessly copied into this repo by [@jonsherrard](https://github.com/jonsherrard), taking all the commmit-credit.

1. **Theme UI preconfigured**

   [Theme UI](https://theme-ui.com) is argubly _the_ most powerful way to theme, style, and componentize React apps around. It's configured out of the box with a slew of plugins so you can get started styling with the `sx` prop, configure light and dark modes, and start theming with your `theme.js` file straight outta the gate.

2. **MDX powered blog**

   Why write any other way? Markdown blogging a-la Jekkyl is included out of the box, just create a new post in the `content/posts` folder to get started. MDX is supported, so you can `import` components into your blog and have them rendered in place as HTML, and running in the client as interactive JavaScript.

   Write components into `content/components` for use in your MDX blog, they have access to all packages, and will work with theme values out of the box.

3. **Simply and reliably add custom fonts**

   Every website uses them, why are they such a pain to configure? Worry no longer, simply run:

   ```sh
   npm run add-font ~/User/example/Downloads/my-fonts/font.org
   ```

   Our script will copy the file to the right place in Gatsby as well as generate all the font-face rules and
   config required to async load the font. Restart Gatsby (webfont-loader limitation), and you're ready to go.

   We use [https://github.com/typekit/webfontloader](https://github.com/typekit/webfontloader) with Gatsby the following font platforms are also supported:

   - Adobe Edge Web Fonts
   - Fontdeck
   - Fonts.com
   - Google
   - Typekit

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/devular/devular-gatsby-starter)

[![Deploy with ZEIT Now](https://zeit.co/button)](https://zeit.co/import/project?template=https://github.com/devular/devular-gatsby-default)

---

Kick off your project with this default boilerplate. This starter ships with the main Gatsby configuration files you might need to get up and running blazing fast with the blazing fast app generator for React.

_Have another more specific idea? You may want to check out our vibrant collection of [official and community-created starters](https://www.gatsbyjs.org/docs/gatsby-starters/)._

## 🚀 Quick start

1.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the Devular starter.

    ```shell
    # create a new Gatsby site using the Devular Starter
    gatsby new my-gatsby-starter https://github.com/devular/devular-gatsby-starter
    ```

1.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```shell
    cd my-gatsby-starter/
    gatsby develop
    ```

1.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

    Open the `my-default-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!

## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── content
    ├── .gitignore
    ├── .prettierrc
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    └── README.md

1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.

2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.

3.  **`/content`**: The directory will contain all of your blog posts, their assets, and components.

4.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

5.  **`.prettierrc`**: This is a configuration file for [Prettier](https://prettier.io/). Prettier is a tool to help keep the formatting of your code consistent.

6.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

7.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).

8.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

9.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

10. **`LICENSE`**: Gatsby is licensed under the MIT license.

11. **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**

12. **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.

13. **`README.md`**: A text file containing useful reference information about your project.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

<!-- AUTO-GENERATED-CONTENT:END -->
