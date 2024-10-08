import { defineConfig } from "vitepress"
import { mdPlugin } from "./config/plugins"
export default defineConfig({
  title: "DOLLS",
  description: "地图组件库",
  lang: "cn-ZH",
  lastUpdated: true,
  head: [
    ['link', {rel: 'icon', href: '/favicon.svg'}]
  ],
  themeConfig: {
    logo: "/favicon.svg",
    siteTitle: "DOLLS",
    outline: 3,
    nav: [
      {
        text: "指引",
        link: "/components/"
      },
      { text: "地图组件", link: "/components/DMap/base.md" },
    ],
    sidebar: {
      "/components": [
        {
          text: "Map",
          items: [
            { text: "地图组件", link: "/components/DMap/base.md" }
          ]
        },
      ]
    }
  },
  markdown: {
    headers: {
      level: [0, 0]
    },
    // light: #f9fafb, dark: --vp-code-block-bg
    theme: { light: "github-light", dark: "github-dark" },
    config: md => mdPlugin(md)
  }
})
