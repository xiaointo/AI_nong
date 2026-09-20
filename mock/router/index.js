import { baseAddress } from '@/api/url'
import Mock from 'mockjs'
import { baseData } from '../base'

export const adminRoutes = [
  {
    menuUrl: '/authority',
    menuName: '溯源管理',
    icon: 'system',
    tip: 'new',
    children: [
      {
        menuUrl: '/authority/department',
        menuName: '查看溯源信息',
        tip: 'new'
      },
      {
        menuUrl: '/other/qrcode',
        menuName: '生成溯源二维码'
      }
    ]
  },
  {
    menuUrl: '/list',
    menuName: '用户管理',
    icon: 'list',
    children: [
      {
        menuUrl: '/authority/user',
        menuName: '客户管理',
        tip: 'circle'
      },
      {
        menuUrl: '/authority/role',
        menuName: '角色管理',
        tip: '12'
      }
    ]
  },
  {
    menuUrl: '/form',
    menuName: '园区管理',
    tip: 'circle',
    icon: 'form',
    children: [
      {
        menuUrl: '/form/base-form-view',
        menuName: '园区参观申请',
        cacheable: true
      },
      {
        menuUrl: '/form/advance-form',
        menuName: '添加园区',
        cacheable: true
      },
      {
        menuUrl: '/authority/menu',
        menuName: '园区管理',
        tip: 'circle'
      },
      {
        menuUrl: '/form/step-form',
        menuName: '支付信息'
      }
    ]
  },
  {
    menuUrl: '/other',
    menuName: '项目依赖',
    children: [
      {
        menuUrl: 'http://sd.bjedtek.com/',
        menuName: '大数据产业创新中心'
      },
      {
        menuUrl: '/other/css-animation',
        menuName: '版本信息'
      }
    ]
  }
]
export const editorRoutes = [
  {
    menuUrl: '/list',
    menuName: '列表页面',
    icon: 'list',
    children: [
      {
        menuUrl: '/list/table',
        menuName: '表格'
      },
      {
        menuUrl: '/list/table-with-search',
        menuName: '表格搜索'
      },
      {
        menuUrl: '/list/grid-list',
        menuName: '卡片列表'
      }
    ]
  },
  {
    menuUrl: '/form',
    menuName: '表单页面',
    tip: 'circle',
    icon: 'form',
    children: [
      {
        menuUrl: '/form/base-form-view',
        menuName: '基本表单',
        cacheable: true
      },
      {
        menuUrl: '/form/advance-form',
        menuName: '高级表单',
        cacheable: true
      },
      {
        menuUrl: '/form/step-form',
        menuName: '分步表单'
      },
      {
        menuUrl: '/form/tip',
        menuName: '通知提示'
      }
    ]
  },
  {
    menuUrl: '/editor',
    menuName: '编辑器',
    tip: '12',
    icon: 'editor',
    children: [
      {
        menuUrl: '/editor/rich-text',
        menuName: '富文本'
      },
      {
        menuUrl: '/editor/markdown',
        menuName: 'markdown'
      }
    ]
  },
  {
    menuUrl: '/other',
    menuName: '其它功能',
    children: [
      {
        menuUrl: '/other/print',
        menuName: '打印'
      },
      {
        menuUrl: 'http://www.baidu.com',
        menuName: '外链'
      },
      {
        menuUrl: '/other/qrcode',
        menuName: '二维码'
      },
      {
        menuUrl: '/other/css-animation',
        menuName: 'Css动画'
      }
    ]
  }
]

Mock.mock(baseAddress + '/getMenuList', function () {
  baseData.data = adminRoutes
  return Mock.mock(baseData)
})
