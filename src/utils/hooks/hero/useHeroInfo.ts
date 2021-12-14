import { useConfigInfo } from '@/utils/hooks/config';

const useHeroInfo = (form: string, heroTypeId: string, star: string) => {
  const config = useConfigInfo();
  // @ts-ignore
  const spineName = config?.HERO?.HERO_NAME[`${heroTypeId}_${form}`];
  // @ts-ignore
  const { classID, tier, name } = config?.HERO?.HERO_CLASS_AND_NAME[heroTypeId];
  // @ts-ignore
  const faction =
    config?.HERO?.HERO_FACTION?.[heroTypeId.toString().substring(0, 1)];
  // @ts-ignore
  const heroClass = config?.HERO?.HERO_CLASS[classID];
  // @ts-ignore
  const heroTierString = config?.HERO?.HERO_TIER[`${tier}`];

  // @ts-ignore

  const level = config?.HERO?.HERO_LEVEL_BY_STAR[star];

  const animPath = `https://marketplace.summonersarena.io/artifact/hero/${heroTypeId}/skin${form}/${spineName}.json`;
  return {
    animPath,
    spineName,
    tier,
    name,
    heroClass,
    heroTierString,
    faction,
    level,
  };
};

export default useHeroInfo;
