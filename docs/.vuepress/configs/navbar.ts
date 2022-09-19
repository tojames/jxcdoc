import type { NavbarConfig } from '@vuepress/theme-default'
// import { version } from '../meta.js'
export const navbar: NavbarConfig = [
  {
    text: '关于',
    link: '/about/',
  },
  {
    text: '帮助文档',
    children: [
      {
        text: '尽消存',
        link: '/help/jxc/',
        children: [
          '/help/jxc/buy/',
          '/help/jxc/sale/',
          '/help/jxc/stock/',
          '/help/jxc/financial/',
          '/help/jxc/system/',
        ],
      },
      {
        text: '管家婆',
        link: '/help/gjp/hh/pjb/',
        children: [
          { text: '辉煌系列', link: '/help/gjp/hh/欢迎.md' },
          '/help/gjp/cm/c/',
          '/help/gjp/tt/',
          '/help/gjp/qf/',
          '/help/gjp/fz/',
        ],
      },
    ],
  },
  {
    text: '开发文档',
    children: [
      {
        text: 'JDP平台',
        link: '/dev/jdp/',
        children: [
          '/dev/jdp/module.md',
          '/dev/jdp/table.md',
          '/dev/jdp/report.md',
          '/dev/jdp/enumeration.md',
          '/dev/jdp/mapping.md',
        ],
      },
      {
        text: '数据库',
        children: ['/dev/jdp/procedure.md', '/dev/jdp/view.md'],
      },
      {
        text: 'config',
        children: ['/dev/jdp/popup.md', '/dev/jdp/define.md'],
      },
      {
        text: '常见问题',
        link: '/dev/jdp/q.md',
      },
    ],
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
