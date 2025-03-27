import { defineConfig } from 'rspress/config';

export default defineConfig({
  base: '/docs/',
  title: 'DSP 算法与硬件系统实验',
  icon: '/rspress-icon.png',
  lang: 'zh',
  logoText: 'DSP 算法与硬件系统实验',
  mediumZoom: false,
  themeConfig: {
    lastUpdated: true,
    socialLinks: [
      {
        icon: 'github',
        mode: 'link',
        content: 'https://github.com/sysudsp/docs',
      },
    ],
    locales: [
      {
        lang: 'zh',
        label: '简体中文',
        outlineTitle: '页面导航',
        lastUpdatedText: '最后更新时间',
        editLink: {
          docRepoBaseUrl: 'https://github.com/sysudsp/docs/tree/main/docs',
          text: '📝 在 GitHub 上编辑此页',
        },
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
    enableContentAnimation: true,
    enableAppearanceAnimation: true,
  },
});
