import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  layout: {
    title: '',
  },
  qiankun: {
    master: {
      apps: [
        {
          name: 'manual-slave',
          entry: 'http://localhost:8888', // your slave app address
        },
      ],
    },
    slave: {},
  },
  base: '/',
  routes: [
    { path: '/', redirect: '/home' },
    { path: '/home', component: 'Home/index', name: '首页' },
    {
      path: '/manual-slave/*',
      microApp: 'manual-slave',
      name: '子应用',
    },
  ],
  npmClient: 'pnpm',
});
