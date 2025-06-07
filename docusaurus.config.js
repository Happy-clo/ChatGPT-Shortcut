// @ts-check
// `@type` JSDoc 注释允许编辑器自动补全和类型检查
// (当与 `@ts-check` 配对时)。
// 有多种等效方式声明 Docusaurus 配置。
// 参见: https://docusaurus.io/docs/api/docusaurus-config

import { themes as prismThemes } from "prism-react-renderer";

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "AiShort - High-Efficiency AI Shortcut Platform | Prompt Management & Productivity Tool",
  // tagline: '方便中文使用 ChatGPT 快捷指令',
  favicon: "img/favicon.ico",

  // 设置站点的生产 URL
  url: "https://www.aishort.top",
  // 设置站点的基础路径
  // 对于 GitHub Pages 部署，通常是 '/<projectName>/'
  baseUrl: "/",

  // GitHub Pages 部署配置
  // 如果不使用 GitHub Pages，则不需要这些配置
  organizationName: "rockbenben", // 通常是你的 GitHub 组织/用户名
  projectName: "ChatGPT-Shortcut", // 通常是你的仓库名

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // 即使不使用国际化，也可以使用此字段设置有用的元数据，如 html lang
  // 例如，如果站点是英文，你可能想将 "zh" 替换为 "en"
  i18n: {
    defaultLocale: "zh",
    locales: ["en", "zh", "ja", "ko", "es", "fr", "de", "it", "ru", "pt", "hi", "ar", "bn"],
    localeConfigs: {
      ar: {
        direction: "rtl",
      },
    },
  },
  future: {
    experimental_faster: true,
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          path: "docs",
          sidebarPath: "sidebars.js",
        },
        theme: {
          customCss: "./src/css/custom.css",
        },
        googleTagManager: {
          containerId: "GTM-MX524GTT",
        },
      }),
    ],
  ],
  plugins: [
    /*
    [
      "@docusaurus/plugin-client-redirects",
      {
        redirects: [
          // /docs/oldDoc -> /docs/newDoc
          {
            to: "/",
            from: "/cn",
          },
        ],
      },
    ], */
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // 替换为你的项目的社交卡片
      // image: 'img/docusaurus-social-card.jpg',
      // autocorrect: false,
      colorMode: {
        defaultMode: "dark",
        disableSwitch: false,
        respectPrefersColorScheme: false,
      },
      metadata: [
        {
          name: "keywords",
          content: "aishort,ChatGPT Shortcut,提示词社区,ai快捷指令,生产力提升,ChatGPT,AI prompts,ai short,ai prompt,提示词,ai提示词",
        },
      ],
      navbar: {
        hideOnScroll: true,
        title: "AI Short",
        logo: {
          alt: "ChatGPT Shortcuts",
          src: "img/logo.svg",
          width: 32,
          height: 32,
        },
        items: [
          {
            to: "docs",
            label: "📘 使用说明",
            position: "left",
          },
          {
            to: "/community-prompts",
            label: "🏘️ 社区提示词",
            position: "left",
          },
          {
            type: "dropdown",
            label: "🛠️ 应用工具",
            position: "left",
            items: [
              {
                label: "脚本扩展",
                to: "/docs/extension",
              },
              {
                label: "IMGPrompt",
                href: "https://prompt.newzone.top/app",
              },
              {
                label: "文字处理",
                href: "https://tools.newzone.top/",
              },
              {
                label: "工具收藏",
                href: "https://nav.newzone.top",
              },
              {
                label: "Find on Product Hunt",
                href: "https://www.producthunt.com/posts/chatgpt-shortcut?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-chatgpt&#0045;shortcut",
              },
            ],
          },
          {
            type: "dropdown",
            label: "反馈建议",
            position: "left",
            items: [
              {
                label: "📝 提交反馈",
                to: "/feedback",
              },
              {
                label: "💬 加入 QQ 群",
                href: "https://img.newzone.top/qq736094782.jpg?imageMogr2/format/webp",
              },
              {
                label: "📺 加入 Discord",
                href: "https://discord.gg/PZTQfJ4GjX",
              },
            ],
          },
          // 从导航栏中移除语言下拉菜单（如果只有一种语言）
          { type: "localeDropdown", position: "right" },
          {
            title: "QQ Group",
            href: "https://qm.qq.com/q/sHgB9eqd6E",
            position: "right",
            className: "header-qq-link",
          },
          {
            title: "Discord",
            href: "https://discord.gg/PZTQfJ4GjX",
            position: "right",
            className: "header-discord-link",
          },
          {
            title: "GitHub",
            href: "https://github.com/rockbenben/ChatGPT-Shortcut",
            position: "right",
            className: "header-github-link",
          },
        ],
      },
      footer: {
        style: "dark",
        copyright: `Copyright © ${new Date().getFullYear()} AiShort (ChatGPT Shortcut)`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },

      /* announcementBar: {
        id: 'announcement_bar',
        content: getAnnouncement(),
        backgroundColor: '#fafbfc',
        textColor: '#091E42',
        isCloseable: false,
      }, */
    }),
};

export default config;
