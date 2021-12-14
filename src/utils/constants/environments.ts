export const ENVIRONMENTS = {
  SKIP_PREFLIGHT_CHECK:
    `${process.env.APP__SKIP_PREFLIGHT_CHECK}` === 'true' ? true : false,

  CHAIN_URL: process.env.APP__CHAIN_URL || '',
  CHAIN_RPC_URL: process.env.APP__CHAIN_RPC_URL || '',
  CHAIN_ID: process.env.APP__CHAIN_ID || '',
  LOCAL_STORAGE_KEY: process.env.APP__LOCAL_STORAGE_KEY || '',

  APP_URL: window.location.origin,
};
