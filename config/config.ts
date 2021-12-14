import { defineConfig } from 'umi';
import defineEnv from './defineEnv';
import routes from './routes';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  favicon: '/assets/favicon.png',
  routes,
  locale: {
    default: 'en-US',
    useLocalStorage: true,
    baseNavigator: true,
    title: true,
    baseSeparator: '-',
  },
  fastRefresh: {},
  define: defineEnv(),
});
