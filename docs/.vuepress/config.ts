import process from 'node:process'
import { viteBundler } from '@vuepress/bundler-vite'
import { webpackBundler } from '@vuepress/bundler-webpack'
import { defineUserConfig } from '@vuepress/cli'
import { docsearchPlugin } from '@vuepress/plugin-docsearch'
import { registerComponentsPlugin } from '@vuepress/plugin-register-components'
import { shikiPlugin } from '@vuepress/plugin-shiki'
import { defaultTheme } from '@vuepress/theme-default'
import { getDirname, path } from '@vuepress/utils'
import { head, navbar, sidebar } from './configs/index.js'

const __dirname = getDirname(import.meta.url)
const isProd = process.env.NODE_ENV === 'production'

export default defineUserConfig({
  // 默认站点目录
  base: '/',
  // 其他head标签
  head,
  // 多语言站点配置
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '进销存文档',
      description: '进销存财务软件帮助文档',
    },
  },
  // 绑定环境变量
  bundler:
    process.env.DOCS_BUNDLER === 'webpack' ? webpackBundler() : viteBundler(),
  // 默认主体配置
  theme: defaultTheme({
    logo: '/images/hero.png',
    // repo如果不注释，就会有GitHub的菜单。
    repo: 'jxcsoft/jxcsoft',
    docsDir: 'docs',
    // 多语言主题配置
    locales: {
      '/': {
        // 顶部菜单
        navbar,
        // 侧边菜单
        sidebar,
        // 原始页面信息
        // editLinkText: '需要人工服务',
        // lastUpdatedText: '上次更新',
        // contributorsText: '贡献者',
        // custom containers
        tip: ' ',
        warning: ' ',
        danger: ' ',
        remark: ' ',
        // 404 页面
        notFound: [
          '这里什么都没有',
          '我们怎么到这来了？',
          '这是一个 404 页面',
          '看起来我们进入了错误的链接',
        ],
        backToHome: '返回首页',
        // a11y
        openInNewWindow: '在新窗口打开',
        toggleColorMode: '切换颜色模式',
        toggleSidebar: '切换侧边栏',
      },
    },
    themePlugins: {
      // 仅在生产模式下启用git插件
      git: isProd,
      // 只在生产模式下使用shiki插件
      prismjs: !isProd,
    },
  }),
  // markdown相关配置
  markdown: {
    importCode: {
      handleImportPath: (str) =>
        str.replace(/^@vuepress/, path.resolve(__dirname, '../../ecosystem')),
    },
  },
  // 使用插件
  plugins: [
    docsearchPlugin({
      appId: 'D9GNH2Y4M8',
      apiKey: 'd38dc692339654e1bda3975f38247629',
      indexName: 'jxcsoft',
      searchParameters: {
        facetFilters: ['tags:v2'],
      },
      locales: {
        '/': {
          placeholder: '搜索文档',
          translations: {
            button: {
              buttonText: '搜索文档',
              buttonAriaLabel: '搜索文档',
            },
            modal: {
              searchBox: {
                resetButtonTitle: '清除查询条件',
                resetButtonAriaLabel: '清除查询条件',
                cancelButtonText: '取消',
                cancelButtonAriaLabel: '取消',
              },
              startScreen: {
                recentSearchesTitle: '搜索历史',
                noRecentSearchesText: '没有搜索历史',
                saveRecentSearchButtonTitle: '保存至搜索历史',
                removeRecentSearchButtonTitle: '从搜索历史中移除',
                favoriteSearchesTitle: '收藏',
                removeFavoriteSearchButtonTitle: '从收藏中移除',
              },
              errorScreen: {
                titleText: '无法获取结果',
                helpText: '你可能需要检查你的网络连接',
              },
              footer: {
                selectText: '选择',
                navigateText: '切换',
                closeText: '关闭',
                searchByText: '搜索提供者',
              },
              noResultsScreen: {
                noResultsText: '无法找到相关结果',
                suggestedQueryText: '你可以尝试查询',
                reportMissingResultsText: '你认为该查询应该有结果？',
                reportMissingResultsLinkText: '点击反馈',
              },
            },
          },
        },
      },
    }),
    // 插件注册
    registerComponentsPlugin({
      componentsDir: path.resolve(__dirname, './components'),
    }),
    // 只在生产模式下使用shiki插件
    isProd ? shikiPlugin({ theme: 'dark-plus' }) : [],
  ],
})
