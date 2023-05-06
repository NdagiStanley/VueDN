import { defaultTheme, defineUserConfig } from "vuepress";
import { registerComponentsPlugin } from "@vuepress/plugin-register-components";
import { searchPlugin } from "@vuepress/plugin-search";
import { getDirname, path } from "@vuepress/utils";
import { glob } from "glob";

let songFiles = glob
  .sync("docs/songs/**/*.md")
  .map((f) => f.replace("docs", "").replace("index.md", ""));

import { description } from "../../package.json";

const __dirname = getDirname(import.meta.url);

export default defineUserConfig({
  lang: "en-US",
  // Global title in HTML <head>.
  // If page has title (in frontmatter) or h1 then: <page title/h1> | <global title>
  // e.g <title>Vuepress-DecapCMS-Netlify | VueDN</title>
  title: "VueDN",
  // Global description in in HTML <head>.
  // If page has description (in frontmatter) then: <global description is replaced by <page description>
  // <meta name="description" content="...">
  description: description,
  head: [
    [
      "script",
      {
        src: "https://identity.netlify.com/v1/netlify-identity-widget.js",
      },
    ],
  ],

  // theme and its config
  theme: defaultTheme({
    logo: "vue.png",
    notFound: ["There's nothing here. If you're looking for DecapCMS, manually enter `/admin` to the root site path to navigate directly to it."],
    navbar: [
      {
        text: "Songs",
        // notice the trailing / (for the automatic next and prev links based on the sidebar)
        link: "/songs/",
      },
      {
        text: "Using this template",
        link: "/template/",
      },
      {
        text: "GitHub",
        link: "https://github.com/NdagiStanley/VueDN",
      },
    ],
    // notice there's a difference between /songs and /songs/
    // We have the /songs to enable this sidebar for /songs and /songs/ paths
    sidebar: {
      "/songs": [
        {
          text: "Songs",
          children: songFiles,
        },
      ],
    },
  }),

  // Replace footer
  alias: {
    "@theme/HomeFooter.vue": path.resolve(
      __dirname,
      "./components/MyHomeFooter.vue"
    ),
  },

  // plugin
  plugins: [
    registerComponentsPlugin({
      // options
      // Absolute path to the components directory
      componentsDir: path.resolve(__dirname, "./components"),
    }),
    searchPlugin({
      // options
      // Default shortcut is key '/'
    }),
  ],
});
