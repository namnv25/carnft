import { useConfigInfo } from '@/utils/hooks/config';

type SkillType = string | undefined;

export const HERO_SKILL = (heroTypeId: string, skills: SkillType[]) => {
  const skillSet = skills;
  return skillSet.map((e, index) => ({
    name: e,
    path: e
      ? `https://marketplace.summonersarena.io/artifact/hero/${heroTypeId}/skill/icon${
          index + 1
        }.png`
      : undefined,
  }));
};

const useHeroSkills = (star: string, heroTypeId: string) => {
  const config = useConfigInfo();
  // @ts-ignore
  const skillLevels = config?.HERO?.HERO_SKILL_LEVEL[star];
  if (!skillLevels) {
    return null;
  }
  // @ts-ignore
  const skills = config?.HERO?.HERO_SKILL[heroTypeId].map(
    (e: string | undefined | null, index: number) => ({
      name: e,
      path: e
        ? `https://marketplace.summonersarena.io/artifact/hero/${heroTypeId}/skill/icon${
            index + 1
          }.png`
        : undefined,
    }),
  );

  return skills.map(
    (skill: { name: string | undefined | null }, index: number) => ({
      ...skill,
      level: skillLevels[index],
    }),
  );
};

export default useHeroSkills;
