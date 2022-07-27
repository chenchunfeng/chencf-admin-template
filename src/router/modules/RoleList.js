import layout from '@/layout'

export default {
  path: '/user',
  component: layout,
  redirect: '/user/manage',
  name: 'roleList',
  meta: {
    title: 'user',
    icon: 'personnel'
  },
  children: [
    {
      path: '/user/role',
      component: () =>
        import(/* webpackChunkName: "role-list" */ '@/views/role-list/index'),
      meta: {
        title: 'test1',
        icon: 'role'
      }
    },
    {
      path: 'test',
      component: () =>
        import(/* webpackChunkName: "role-list" */ '@/views/role-list/index'),
      meta: {
        title: 'test2',
        icon: 'role'
      }
    }
  ]
}
