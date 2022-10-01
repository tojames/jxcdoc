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
          { text: '购货管理', link: '/help/jxc/buy/ghxj.md' },
          { text: '销货管理', link: '/help/jxc/sale/xhbj.md' },
          { text: '仓库管理', link: '/help/jxc/stock/cbtz.md' },
          { text: '财务管理', link: '/help/jxc/financial/skd.md' },
          { text: '系统设置', link: '/help/jxc/system/jczl.md' },
        ],
      },
      {
        text: '管家婆',
        link: '/help/gjp/',
        children: [
          { text: '辉煌系列', link: '/help/gjp/hh/' },
          { text: '工贸T系列', link: '/help/gjp/gmt/' },
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
          '/dev/jdp/xtmk.md',
          '/dev/jdp/bjg.md',
          '/dev/jdp/bbsz.md',
          '/dev/jdp/mjgl.md',
          '/dev/jdp/zdys.md',
        ],
      },
      {
        text: '数据库',
        children: [
          '/dev/jdp/ccgc.md',
          '/dev/jdp/st.md',
          '/dev/jdp/blz.md',
          '/dev/jdp/sjk.md',
        ],
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
