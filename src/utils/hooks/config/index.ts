import { WEB_PATHS } from '@/utils/apis';
import { useRequest } from '@umijs/hooks';
import { atom, useRecoilState, useRecoilValue } from 'recoil';
import dayjs from 'dayjs';
import { web } from '@/utils/apis';
interface HeroLevelByStarInterface {
  [key: string]: number;
}
interface ConfigInterface {
  loading: boolean;
  APP_CONFIG: {
    underMaintain: boolean;
    summonRefreshTime: number;
    firstSaleDate: undefined;
    showGameFeature: undefined;
    showNotification: undefined;
    whiteList: undefined;
    showDashboard: undefined;
    showSpecialSummon: undefined;
  };
  HERO: {
    HERO_BODY_PART_COLOR: undefined;
    HERO_CLASS: undefined;
    HERO_FACTION: undefined;
    HERO_FORM: undefined;
    HERO_LEVEL_BY_STAR: HeroLevelByStarInterface[] | undefined;
    HERO_SKILL: undefined;
    HERO_SKILL_LEVEL: undefined;
    HERO_ID_TIER: undefined;
    HERO_TIER: undefined;
    HERO_NAME: undefined;
    HERO_CLASS_AND_NAME: undefined;
  };
  CONTRACTS: {
    IN_GAME_WALLET: '';
    SAE: ['', ''];
    ASG: ['', ''];
    HERO_MARKET: ['', ''];
    SUMMONERS_ARENA_HEROS: ['', ''];
  };
}

const initialValue: ConfigInterface = {
  loading: true,
  APP_CONFIG: {
    underMaintain: undefined,
    summonRefreshTime: 15,
    firstSaleDate: undefined,
    showGameFeature: undefined,
    showNotification: undefined,
    whiteList: undefined,
    showDashboard: undefined,
    showSpecialSummon: undefined,
  },
  HERO: {
    HERO_BODY_PART_COLOR: undefined,
    HERO_CLASS: undefined,
    HERO_FACTION: undefined,
    HERO_FORM: undefined,
    HERO_LEVEL_BY_STAR: undefined,
    HERO_SKILL: undefined,
    HERO_SKILL_LEVEL: undefined,
    HERO_ID_TIER: undefined,
    HERO_TIER: undefined,
    HERO_NAME: undefined,
    HERO_CLASS_AND_NAME: undefined,
  },
  CONTRACTS: {
    IN_GAME_WALLET: '',
    SAE: ['', ''],
    ASG: ['', ''],
    HERO_MARKET: ['', ''],
    SUMMONERS_ARENA_HEROS: ['', ''],
  },
};

export const configAtoms = atom({
  key: 'CONFIG_ATOMS',
  default: initialValue,
});

export const useHeroConfig = () => {
  const config = useRecoilValue(configAtoms);
  return Boolean(config?.HERO);
};

export const useConfigInfo = () => {
  const config = useRecoilValue(configAtoms);
  return config;
};

export const useIsMaintainance = () => {
  const config = useRecoilValue(configAtoms);
  return Boolean(config?.APP_CONFIG?.underMaintain);
};

export const useSummonRefreshTime = () => {
  const config = useRecoilValue(configAtoms);
  return config?.APP_CONFIG?.summonRefreshTime || 15;
};

export const useFirstSaleDate = () => {
  const config = useRecoilValue(configAtoms);
  return dayjs(config?.APP_CONFIG?.firstSaleDate, 'YYYYMMDD').format();
};

export const useConfigShowGameFeature = () => {
  const config = useRecoilValue(configAtoms);
  return Boolean(config?.APP_CONFIG?.showGameFeature);
};

export const useConfigShowNotification = () => {
  const config = useRecoilValue(configAtoms);
  return Boolean(config?.APP_CONFIG?.showNotification);
};

export const useConfigWhiteList = () => {
  const config = useRecoilValue(configAtoms);
  return Boolean(config?.APP_CONFIG?.whiteList);
};

export const useConfigDashboard = () => {
  const config = useRecoilValue(configAtoms);
  return Boolean(config?.APP_CONFIG?.showDashboard);
};

export const useConfigShowSpecialSummon = () => {
  const config = useRecoilValue(configAtoms);
  return Boolean(config?.APP_CONFIG?.showSpecialSummon);
};

export const useConfig = () => {
  const [config, setConfig] = useRecoilState(configAtoms);

  useRequest(
    async () => {
      const jsons = [
        WEB_PATHS.APP_CONFIG, // 0
        WEB_PATHS.HERO_BODY_PART_COLOR, // 1
        WEB_PATHS.HERO_CLASS, // 2
        WEB_PATHS.HERO_FACTION, // 3
        WEB_PATHS.HERO_FORM, // 4
        WEB_PATHS.HERO_LEVEL_BY_STAR, // 5
        WEB_PATHS.HERO_SKILL, // 6
        WEB_PATHS.HERO_SKILL_LEVEL, // 7
        WEB_PATHS.HERO_ID_TIER, // 8
        WEB_PATHS.HERO_TIER, // 9
        WEB_PATHS.CONTRACTS.ADDRESSES, // 10
        WEB_PATHS.CONTRACTS.SAE, // 11
        WEB_PATHS.CONTRACTS.ASG, // 12
        WEB_PATHS.CONTRACTS.HERO_MARKET, // 13
        WEB_PATHS.CONTRACTS.SUMMONERS_ARENA_HEROS, // 14
        WEB_PATHS.HERO_NAME, // 15
        WEB_PATHS.HERO_CLASS_AND_NAME, //16
      ];
      return Promise.all(jsons.map((path) => web.get(path)));
    },
    {
      onSuccess: (r) => {
        setConfig({
          APP_CONFIG: r[0],
          HERO: {
            HERO_BODY_PART_COLOR: r[1],
            HERO_CLASS: r[2],
            HERO_FACTION: r[3],
            HERO_FORM: r[4],
            HERO_LEVEL_BY_STAR: r[5],
            HERO_SKILL: r[6],
            HERO_SKILL_LEVEL: r[7],
            HERO_ID_TIER: r[8],
            HERO_TIER: r[9],
            HERO_NAME: r[15],
            HERO_CLASS_AND_NAME: r[16],
          },
          CONTRACTS: {
            IN_GAME_WALLET: r[10].IN_GAME_WALLET_ADDRESS,
            SAE: [r[10].SAE_TOKEN, r[11]],
            ASG: [r[10].ASG_TOKEN, r[12]],
            HERO_MARKET: [r[10].HEROES_MARKET, r[13]],
            SUMMONERS_ARENA_HEROS: [r[10].SUMMONERS_ARENA_HEROES, r[14]],
          },
          loading: false,
        });
      },
    },
  );
  return { loading: config.loading };
};
