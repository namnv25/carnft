import { useRequest } from '@umijs/hooks';
import { apiMeta, API_META_PATHS } from '@/utils/apis';
import { translation } from '@/utils/translations';
import { decrypt } from '@/utils/normalizers';

interface GetHeroStatsInterface {
  heroTypeId: string;
  level: string;
  star: string;
  form: string;
  atk: string;
  def: string;
  crit: string;
  hp: string;
}

interface HeroStatsInterface {
  heroTypeId: string;
  level: string;
  star: string;
  form: string;
  attackPart: string;
  defensePart: string;
  criticalRatePart: string;
  hpPart: string;
}

const getHeroStats = async ({
  heroTypeId,
  level,
  star,
  form,
  atk,
  def,
  crit,
  hp,
}: GetHeroStatsInterface) => {
  const rs = await apiMeta.get(
    API_META_PATHS.GET_HERO_METADATA({
      heroTypeId,
      level,
      star,
      form,
      atk,
      def,
      crit,
      hp,
    }),
  );

  const [
    ,
    name,
    ,
    ,
    ,
    attackPartId,
    critRatePartId,
    hpPartId,
    defensePartId,
    attack,
    defense,
    ,
    speed,
    critRate,
    critDamage,
    accuracy,
    dodge,
    pureDamage,
    skillDamage,
    armorBreak,
    ccResistance,
    damageReduction,
    battlePower,
    summonPoint,
  ] = decrypt(rs);

  return {
    heroTypeId,
    name,
    level,
    star,
    form,
    attackPartId,
    critRatePartId,
    hpPartId,
    defensePartId,
    attack,
    defense,
    hp,
    speed,
    critRate: critRate * 100,
    critDamage: critDamage * 100,
    accuracy,
    dodge,
    pureDamage: pureDamage * 100,
    skillDamage: skillDamage * 100,
    armorBreak: armorBreak * 100,
    ccResistance: ccResistance * 100,
    damageReduction: damageReduction * 100,
    battlePower,
    summonPoint,
  };
};

const useHeroStats = ({
  heroTypeId,
  form,
  defensePart,
  hpPart,
  criticalRatePart,
  attackPart,
  star,
  level,
}: HeroStatsInterface) => {
  return useRequest(getHeroStats, {
    refreshDeps: [
      heroTypeId,
      form,
      defensePart,
      hpPart,
      criticalRatePart,
      attackPart,
      star,
      level,
    ],
    defaultParams: [
      {
        heroTypeId,
        form,
        def: defensePart,
        hp: hpPart,
        crit: criticalRatePart,
        atk: attackPart,
        star,
        level,
      },
    ],
  });
};

export default useHeroStats;
