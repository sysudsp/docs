import * as path from 'node:path';
import { defineConfig } from 'rspress/config';

export default defineConfig({
  root: path.join(__dirname, 'docs'),
  title: 'My Site',
  icon: '/rspress-icon.png',
  lang: 'zh',
  logo: {
    light: '/rspress-light-logo.png',
    dark: '/rspress-dark-logo.png',
  },
  themeConfig: {
    // socialLinks: [
    //   {
    //     icon: 'github',
    //     mode: 'link',
    //     content: 'https://github.com/web-infra-dev/rspress',
    //   },
    // ],
    locales: [
      {
        lang: 'zh',
        label: '简体中文',
        outlineTitle: '页面导航',
        lastUpdatedText: '最后更新时间',
        // editLink: {
        //   docRepoBaseUrl: 'https://github.com/web-infra-dev/rspress/tree/main/packages/document/docs',
        //   text: '📝 在 GitHub 上编辑此页',
        // },
        prevPageText: '上一页',
        nextPageText: '下一页',
        sourceCodeText: '源代码',
        searchPlaceholderText: '搜索文档',
        searchNoResultsText: '未搜索到相关结果',
        searchSuggestedQueryText: '可更换不同的关键字后重试',
        overview: {
          filterNameText: '过滤',
          filterPlaceholderText: '输入关键词',
          filterNoResultText: '未找到匹配的 API',
        },
      },
    ],
  },
});
