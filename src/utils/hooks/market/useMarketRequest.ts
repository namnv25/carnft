import { api, API_PATHS } from '@/utils/apis';
import { utils } from 'ethers';
import toNumber from 'lodash/toNumber';

interface Query {}

const useMarketRequest = ({
  query,
  address,
  size = 9,
  inventory = false,
}: {
  query?: Query;
  address?: string;
  size: number;
  inventory: boolean;
}) => {
  // async ({ query, address, sideDefault = 9, isInventory }) => {
  //   let page = 0;
  //   let reqAddress = '';
  //   const params = {
  //     criticalRatePartStart: 1,
  //     criticalRatePartEnd: 10,
  //     formStart: 1,
  //     formEnd: 3,
  //     attackPartStart: 1,
  //     attackPartEnd: 10,
  //     hpPartStart: 1,
  //     hpPartEnd: 10,
  //     defensePartStart: 1,
  //     defensePartEnd: 10,
  //     starStart: 0,
  //     starEnd: 12,
  //     summonPointStart: 0,
  //     summonPointEnd: 10,
  //   };
  //   const q = qs.parse(query);
  //   if (isInventory) {
  //     params.nftOwnerId = address;
  //   }
  //   if (q) {
  //     if (q?.page) {
  //       page = q.page;
  //       delete q.page;
  //     }
  //     if (q?.o) {
  //       if (q.o === 'true') {
  //         reqAddress = address;
  //       }
  //       delete q.o;
  //     }
  //     if (q?.noi) {
  //       if (q.noi === 'true') {
  //         params.nftOwnerId = address;
  //       }
  //       delete q.noi;
  //     }
  //     for (const key of Object.keys(q)) {
  //       switch (key) {
  //         case 'crps':
  //           params.criticalRatePartStart = toNumber(q[key]);
  //           break;
  //         case 'crpe':
  //           params.criticalRatePartEnd = toNumber(q[key]);
  //           break;
  //         case 'hps':
  //           params.hpPartStart = toNumber(q[key]);
  //           break;
  //         case 'hpe':
  //           params.hpPartEnd = toNumber(q[key]);
  //           break;
  //         case 'aps':
  //           params.attackPartStart = toNumber(q[key]);
  //           break;
  //         case 'ape':
  //           params.attackPartEnd = toNumber(q[key]);
  //           break;
  //         case 'dps':
  //           params.defensePartStart = toNumber(q[key]);
  //           break;
  //         case 'dpe':
  //           params.defensePartEnd = toNumber(q[key]);
  //           break;
  //         case 'ss':
  //           params.starStart = toNumber(q[key]);
  //           break;
  //         case 'se':
  //           params.starEnd = toNumber(q[key]);
  //           break;
  //         case 'sps':
  //           params.summonPointStart = toNumber(q[key]);
  //           break;
  //         case 'spe':
  //           params.summonPointEnd = toNumber(q[key]);
  //           break;
  //         case 'fs':
  //           params.formStart = toNumber(q[key]);
  //           break;
  //         case 'fe':
  //           params.formEnd = toNumber(q[key]);
  //           break;
  //         case 'hid':
  //           params.hid = toNumber(q[key]);
  //           break;
  //         default:
  //           break;
  //       }
  //     }
  //   }
  //   if (!!params.hid) {
  //     const result = await getHeroInfo(params.hid);
  //     return {
  //       isHero: true,
  //       result: {
  //         ...result,
  //         heroId: params.hid,
  //         id: params.hid,
  //       },
  //     };
  //   }
  //   let path = API_PATHS.GET_HERO_LIST;
  //   if (reqAddress) {
  //     path = API_PATHS.GET_YOUR_OFFER;
  //   }
  //   const requestQuery = {
  //     page,
  //     size: sideDefault,
  //   };
  //   if (reqAddress) {
  //     if (path === API_PATHS.GET_YOUR_OFFER) {
  //       delete params.nftOwnerId;
  //     }
  //     requestQuery.address = reqAddress;
  //   }
  //   const result = await api.post(path, {
  //     body: params,
  //     params: requestQuery,
  //   });
  //   const heroIds = result.data.heroes.map((e) => e.id);
  //   const resultHeroPrices = await api.post(API_PATHS.GET_LIST_PRICE_HERO, {
  //     heroesId: heroIds,
  //   });
  //   const prices = resultHeroPrices.data;
  //   return {
  //     ...result.data,
  //     heroes: result.data.heroes.map((e: any) => {
  //       const originalPrice = prices && prices[e.id] ? prices[e.id] : undefined;
  //       return {
  //         ...e,
  //         originalPrice,
  //         price: originalPrice
  //           ? utils.formatEther(originalPrice)
  //           : undefined,
  //       };
  //     }),
  //   };
  // };
};

export default useMarketRequest;
