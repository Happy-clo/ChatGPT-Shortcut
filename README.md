<h1 align="center">
⚡️AI Short
</h1>
<p align="center">
    英文 | <a href="./README-zh.md">中文</a> |
<a href="./README-lang/README-es.md">西班牙语</a> |
<a href="./README-lang/README-ja.md">日语</a> |
<a href="./README-lang/README-ko.md">韩语</a> |
<a href="./README-lang/README-fr.md">法语</a> |
<a href="./README-lang/README-de.md">德语</a> |
<a href="./README-lang/README-it.md">意大利语</a> |
<a href="./README-lang/README-ru.md">俄语</a> |
<a href="./README-lang/README-pt.md">葡萄牙语</a> |
<a href="./README-lang/README-ar.md">阿拉伯语</a> |
<a href="./README-lang/README-hi.md">印地语</a> |
<a href="./README-lang/README-bn.md">孟加拉语</a>
</p>
<p align="center">
    <em>ChatGPT 快捷指令，最大化您的效率与生产力</em>
</p>

## 为什么使用 AiShort？

AiShort 提供了一份简洁且易用的 AI 指令列表。即使不懂提示词，也能通过筛选和搜索轻松找到适合各种场景的提示词，从而提升您的工作效率。

🚀 **一键提示**：只需轻点一下，即可获得专家精心挑选的多种提示词。将它们发送给 ChatGPT 等 AI 语言模型，即可获得预期的输出结果。

💻 **提升生产力**：使用优化后的提示词，您可以获得更加准确且实用的反馈，从而有效提升工作效率。

🌍 **多语言优化**：我们提供 12 种主要全球语言的英文提示词翻译，支持以您的母语作为默认回复，方便非英语用户理解和使用。

💾 **保存提示词**：方便收藏、编辑和管理您喜欢的提示词，便于日后使用。

🌐 **分享提示词**：分享您喜欢的提示词，与他人协作，激发更多灵感。

🗳️ **社区投票系统**：类似 Product Hunt 或 Reddit，平台由社区驱动，最佳提示词会被推荐到首页。

📦 **即刻使用**：访问 https://www.aishort.top/zh/ 即可开始使用。

AiShort 提示词来源包括网络精选、社区分享及 [Awesome ChatGPT Prompts](https://github.com/f/awesome-chatgpt-prompts)。我们会定期更新，为您提供最新提示词和灵感。关于如何使用 AiShort，请参考 [用户手册](https://www.aishort.top/zh/docs/guides/getting-started)。

欢迎加入我们的 Discord 社区，交流想法与反馈。

<a href="https://discord.gg/PZTQfJ4GjX">
   <img src="https://img.shields.io/discord/1048780149899939881?color=%2385c8c8&label=Discord&logo=discord&style=for-the-badge" alt="在 Discord 聊天" />
</a>

## 浏览器扩展

AiShort（ChatGPT 快捷指令）是一款兼容 Chrome、Edge、Firefox 及其他基于 Chromium 浏览器的多功能扩展。该扩展不仅具备网页版 ChatGPT 快捷指令的功能，还新增了侧边栏和自动窗口激活等特色功能。扩展可随 ChatGPT 或自定义页面自动启动，也可通过快捷键 `Alt+Shift+S` 手动激活。下载渠道如下：

- **Chrome**：[Chrome 网上应用店](https://chrome.google.com/webstore/detail/chatgpt-shortcut/blcgeoojgdpodnmnhfpohphdhfncblnj)
- **Edge**：[Microsoft Edge 附加组件](https://microsoftedge.microsoft.com/addons/detail/chatgpt-shortcut/hnggpalhfjmdhhmgfjpmhlfilnbmjoin)
- **Firefox**：[Firefox 浏览器插件](https://addons.mozilla.org/addon/chatgpt-shortcut/)
- **GitHub**：[GitHub 最新版本发布](https://github.com/rockbenben/ChatGPT-Shortcut/releases/latest)

此外，我们提供 Tampermonkey 脚本——[**ChatGPT Shortcut Anywhere**](https://greasyfork.org/scripts/482907-chatgpt-shortcut-anywhere)，允许用户自定义匹配域名，在任意网站使用 AiShort 侧边栏。但因 ChatGPT 页面对脚本内容注入有限制，脚本的侧边栏功能在 ChatGPT 页面通过弹窗激活。

## 部署

关于通过 Vercel、本地环境、Docker 部署及项目修改的详细步骤，请参阅 [ChatGPT Shortcut 部署指南](https://www.aishort.top/zh/docs/deploy)。

## 同步更新

如果您通过一键部署在 Vercel 部署了自己的项目，可能会遇到持续提示更新的问题。这是因为 Vercel 默认行为是为您新建项目，而非 Fork 当前项目，导致无法正常检测更新。建议按以下步骤重新部署：

1. 删除之前的仓库。
2. 使用页面右上角的“Fork”按钮 Fork 当前项目。
3. 在 [Vercel 新建项目页面](https://vercel.com/new) 选择刚 Fork 的项目，从导入 Git 仓库区域开始部署。

### 自动更新

> 若执行 Upstream Sync 时报错，请手动执行一次 Sync Fork。

Fork 项目后，因 GitHub 限制，需手动在您 Fork 的项目的 Actions 页面启用工作流，并激活 Upstream Sync Action。启用后将每日自动执行更新。

![自动更新](https://img.newzone.top/2023-05-19-11-57-59.png?imageMogr2/format/webp)

![启用自动更新](https://img.newzone.top/2023-05-19-11-59-26.png?imageMogr2/format/webp)

### 手动更新

若您希望立即手动更新，可参考 [GitHub 文档](https://docs.github.com/zh/pull-requests/collaborating-with-pull-requests/working-with-forks/syncing-a-fork) 学习如何同步 Fork 项目与上游代码。

欢迎为本项目点赞/关注，或关注作者，及时获取新功能更新通知。

## 修改说明

AI Short 是开源项目，您可以自由修改网站名称和说明。

- 修改页面名称，请查看 `docusaurus.config.js` 文件。
- 修改使用说明，请进入 `docs` 目录。
- 修改提示词，请在 `src/data/prompt.json` 中查找。如仅需修改某种语言（如中文），请编辑 `src/data/prompt_zh.json`。
- 当前用户端系统已集成公共后端。如有需要，您可自行搭建后端，相关接口在 `src/api.js` 文件中。

`CodeUpdateHandler.py` 是用于多语言批量处理的脚本。修改完成后，执行 `python CodeUpdateHandler.py`，它将按规则拆分 `prompt.json` 为多语言版本，并同步主页代码及各语言提示词页面代码。

> [!CAUTION]  
> 本分支仅供个人开发、学习和研究使用，请勿直接使用任何附件。作者对源附件出现的任何问题不承担责任。

# 免责声明

> [!CAUTION]  
> 本分支仅供个人开发学习研究使用，请勿直接使用任何附件。如出现任何源附件相关问题，作者概不负责。

---

> [!CAUTION]  
> This branch is only for personal development, study and research. Please do not use any attachments directly. The author is not responsible for any problems with the source attachments.
