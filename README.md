# 《DSP 算法与硬件系统实验》课程文档

此文档站点使用 [Rspress](https://rspress.dev/) 制作，你需要安装 [Node.js](https://nodejs.org/) 来配置开发环境。

开发（修改）流程：

1. 克隆本仓库。
2. 在仓库目录中运行 `npm install` 命令安装依赖软件包。
3. 在仓库目录中运行 `npm run dev` 命令启动开发服务器，打开输出的网址即可在浏览器中查看效果。
4. 正常编辑 Markdown 文档。
5. 编辑完成后，运行 `npm run build` 命令确认站点能够正常编译，然后在 Git 中提交并推送。
6. GitHub Actions 会自动在服务器上编译和发布站点。

提示：

- Rspress 支持一些[特殊 Markdown 语法](https://rspress.dev/zh/guide/basic/use-mdx)。
- 目录中的 `_meta.json` 文件控制[侧边栏的生成](https://rspress.dev/zh/guide/basic/auto-nav-sidebar)。
- [站点配置](https://rspress.dev/zh/api/config/config-basic) 在 `rspress.config.ts` 文件中。

---

以下是项目模板中自带的 README 内容。

---

# Rspress website

## Setup

Install the dependencies:

```bash
npm install
```

## Get started

Start the dev server:

```bash
npm run dev
```

Build the website for production:

```bash
npm run build
```

Preview the production build locally:

```bash
npm run preview
```
