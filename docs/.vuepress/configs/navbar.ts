import type { NavbarConfig } from '@vuepress/theme-default'
// import { version } from '../meta.js'
export const navbar: NavbarConfig = [
  {
    text: '关于',
    link: '/a/',
  },
  {
    text: '帮助文档',
    children: [
      {
        text: '尽消存',
        link: '/h/j/',
        children: [
          { text: '购货管理', link: '/h/j/a/a.md' },
          { text: '销货管理', link: '/h/j/b/a.md' },
          { text: '仓库管理', link: '/h/j/c/a.md' },
          { text: '财务管理', link: '/h/j/d/a.md' },
          { text: '系统设置', link: '/h/j/e/a.md' },
        ],
      },
      {
        text: '管家婆',
        link: '/h/g/',
        children: [
          { text: '辉煌系列', link: '/h/g/h/' },
          { text: '工贸T系列', link: '/h/g/t/' },
        ],
      },
    ],
  },
  {
    text: '开发文档',
    children: [
      {
        text: 'JDP平台',
        link: '/d/j/',
        children: [
          '/d/j/a.md',
          '/d/j/b.md',
          '/d/j/c.md',
          '/d/j/d.md',
          '/d/j/e.md',
        ],
      },
      {
        text: 'config',
        link: '/d/j/1.md',
        children: ['/d/j/f.md', '/d/j/g.md'],
      },
      {
        text: '数据库',
        link: '/d/j/2.md',
        children: ['/d/j/h.md', '/d/j/i.md', '/d/j/j.md', '/d/j/k.md'],
      },
      {
        text: '常见问题',
        link: '/d/j/z/',
        children: [],
      },
    ],
  },
  {
    text: '文档目录',
    link: '/list.md/',
  },
  {
    text: '主站',
    // text: `v${version}`,
    children: [
      {
        text: '进销存软件',
        link: 'http://www.jxcsoft.cn',
      },
      {
        text: '件软软件',
        link: 'http://alllla.cn',
      },
      {
        text: '进销存社区',
        link: 'https://jxcsq.com',
      },
    ],
  },
]
