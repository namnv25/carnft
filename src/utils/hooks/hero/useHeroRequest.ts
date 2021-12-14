import useHeroContracts from '@/utils/contracts/heroes';
import useMarketContracts from '@/utils/contracts/market';
import { isOwned } from '@/utils/normalizers';
import { useRequest } from '@umijs/hooks';
import { utils } from 'ethers';
import { useCurrentAccountAddress } from '../connect/wallet';

const useHeroRequest = (id: number) => {
  const heroContracts = useHeroContracts();
  const marketContracts = useMarketContracts();
  const currentAccountAddress = useCurrentAccountAddress();

  return useRequest(
    async () => {
      return Promise.all([
        heroContracts.getHeroById(id),
        marketContracts.getHeroPrice({ heroId: id }),
      ]);
    },
    {
      refreshDeps: [id, currentAccountAddress],
      formatResult: (r) => {
        const [detail, price] = r;
        const [
          star,
          form,
          attackPart,
          criticalRatePart,
          defensePart,
          hpPart,
          summonPoint,
          heroTypeId,
          ownerOfHero,
        ] = detail;

        return {
          originalPrice: price,
          price: utils.formatEther(price),
          star,
          form,
          attackPart,
          criticalRatePart,
          defensePart,
          hpPart,
          summonPoint,
          heroTypeId,
          ownerOfHero,
          isOwned: isOwned(currentAccountAddress, ownerOfHero),
        };
      },
    },
  );
};

export default useHeroRequest;
