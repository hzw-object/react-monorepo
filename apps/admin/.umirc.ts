import { defineConfig } from '@umijs/max';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  layout: false,
  initialState: {},
  request: {},
  qiankun: {
    slave: {},
  },
  base: 'manual-slave',
  routes: [{ path: '/', component: '@/pages/home' }],
  npmClient: 'pnpm',
});
