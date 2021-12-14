import { extend } from 'umi-request';
import { ENVIRONMENTS } from '../constants/environments';

export const web = extend({
  prefix: ENVIRONMENTS.APP_URL,
});
