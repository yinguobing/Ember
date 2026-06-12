# Ember

Ember是一款简洁现代的[Ghost](https://ghost.org/)主题，专为内容型出版物设计。在Ghost基金会原始主题的基础上进行了大量定制，增加了自定义首页布局、Hero动画和CJK排版支持。

**演示站点：** https://yinguobing.com

## 功能特性

- Hero区域 — 动画渐变背景，可配置文字乱序特效。支持使用站点封面图作为替代背景
- 卡片布局 — 文章以清晰卡片展示，包含响应式图片（srcset）、标签徽章和元数据
- 精选内容轮播 — 深色主题的精选文章轮播，支持自动播放和导航控制
- 精选文章页面 — 独立的 `/featured/` 页面浏览全部精选文章，基于 Ghost 原生 `featured:true` 标记
- 首页网格 — "近期发表"三栏布局（1 大 + 4 小卡片），以及 8 卡片的"更早文章"网格
- 热门标签云 — 带背景图片和深色遮罩的标签展示
- CJK排版 — `lang="zh"` 时自动应用中文字体栈和间距调整
- 深色模式 — 基于背景色亮度通过 CSS 自定义属性自动适配明暗主题

## 安装

1. 下载[最新版本](https://github.com/yinguobing/Ember/releases)
2. 在Ghost后台Design → Change theme上传`ember.zip`

## 开发

本主题使用 Gulp/PostCSS 构建，需要安装 [Node.js](https://nodejs.org/) 和 [Yarn](https://yarnpkg.com/)。

```bash
# 安装依赖
yarn

# 构建并监听文件变化
yarn dev

# 创建发布包
yarn zip
```

编辑 `/assets/css/` 中的文件，会自动编译到 `/assets/built/`。

## 自定义设置

在 Ghost 后台 Design 中可配置以下选项：

| 设置 | 说明 |
|------|------|
| 导航布局 | Logo居左或居中 |
| 站点背景色 | 页面背景色，同时影响明暗模式 |
| 标题/正文字体 | 现代无衬线（Inter）或优雅衬线（Lora） |
| Hero背景类型 | 动画渐变或站点封面图 |
| Hero乱序短语 | 逗号分隔的文字短语，用于 Hero 动画 |
| Hero乱序速度 | 快、正常、慢 |
| Hero水平/垂直位置 | 文字位置百分比（0–100） |
| 页脚文字 | 自定义版权信息 |
| 热门标签 | 逗号分隔的标签 slug，用于首页展示 |

## 原始主题

Ember基于Ghost基金会的[原始主题](https://github.com/TryGhost/Headline)构建。

## 许可证

Copyright (c) 2013-2026 Ghost Foundation
Copyright (c) 2024-2026 yinguobing

基于 [MIT license](LICENSE) 发布。
