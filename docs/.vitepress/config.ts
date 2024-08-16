import { defineConfig } from "vitepress"
import { mdPlugin } from "./config/plugins"
export default defineConfig({
  title: "DOLLS",
  description: "地图组件库",
  lang: "cn-ZH",
  base: "/dolls/",
  lastUpdated: true,
  themeConfig: {
    logo: "/favicon.svg",
    siteTitle: "DOLLS",
    outline: 3,
    nav: [
      {
        text: "指引",
        link: "/components/"
      },
      { text: "基础组件", link: "/components/DButton/base.md" },
    ],
    sidebar: {
      "/components": [
        {
          text: "常用组件",
          items: [
            { text: "Button组件", link: "/components/DButton/base.md" },
            {text: "地图组件", link: "/components/DMap/base.md"}
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
