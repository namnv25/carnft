import { useConfigInfo } from '@/utils/hooks/config';
import { ethers } from 'ethers';
import account from './account';
import { getProvider, preContractRequest } from './ultilities';

interface GetApprovedInterface {
  heroId: number;
}

interface ApproveInterface {
  heroId: number;
}

const useHeroContracts = () => {
  const config = useConfigInfo();

  const createNewContract = (
    signerOrProvider: ethers.Signer | ethers.providers.Provider,
  ) => {
    return new ethers.Contract(
      config.CONTRACTS.SUMMONERS_ARENA_HEROS[0],
      config.CONTRACTS.SUMMONERS_ARENA_HEROS[1],
      signerOrProvider,
    );
  };

  const getApproved = async ({ heroId }: GetApprovedInterface) => {
    const provider = await getProvider();
    const signer = await provider.getSigner();
    const contract = createNewContract(signer);
    const result = await contract.getApproved(heroId);
    return result;
  };

  const approve = async ({ heroId }: ApproveInterface) => {
    const provider = await getProvider();
    const signer = await provider.getSigner();
    const contract = createNewContract(signer);
    const result = await contract.approve(
      config.CONTRACTS.HERO_MARKET[0],
      heroId,
    );
    return result;
  };

  const getHeroBalance = async (address: string) => {
    const provider = await getProvider();
    const contract = createNewContract(provider);
    console.log(address);
    return contract.balanceOf(address);
  };

  const getWhiteList = async (address: string) => {
    const provider = await getProvider();
    const contract = createNewContract(provider);
    return contract.whiteList(address);
  };

  const getHeroById = async (heroId: number) => {
    const provider = await getProvider();
    const contract = createNewContract(provider);
    return contract.getHeroById(heroId);
  };

  const getConfig = async () => {
    const provider = await getProvider();
    const contract = createNewContract(provider);
    const configNumber = await contract.getLatestConfig();
    const result = await contract.configs(configNumber.toString());
    const [
      startTime,
      endTime,
      basicPrice,
      totalSell,
      currentSell,
      maxPerPurchase,
    ] = result;

    return {
      startTime: startTime.toString(),
      endTime: endTime.toString(),
      basicPrice: ethers.utils.formatEther(basicPrice),
      originBasicPrice: basicPrice,
      totalSell: totalSell.toString(),
      currentSell: currentSell.toString(),
      maxPerPurchase: maxPerPurchase.toString(),
    };
  };

  const claimHeroes = async ({
    amount,
    price,
  }: {
    amount: number;
    price: ethers.BigNumber;
  }) => {
    const provider = await getProvider();
    const signer = await provider.getSigner();
    const contract = createNewContract(signer);
    const result = await contract.claimHeroes(amount, {
      value: price.toString(),
    });
    return result.wait();
  };

  return {
    getApproved: ({ heroId }: GetApprovedInterface) =>
      preContractRequest(getApproved, { heroId }, true),
    approve: ({ heroId }: ApproveInterface) =>
      preContractRequest(approve, { heroId }, true),
    getHeroBalance,
    getWhiteList,
    getHeroById: (heroId: number) => getHeroById(heroId),
    getConfig,
    claimHeroes: ({
      amount,
      price,
    }: {
      amount: number;
      price: ethers.BigNumber;
    }) => preContractRequest(claimHeroes, { amount, price }, true),
  };
};

export default useHeroContracts;
