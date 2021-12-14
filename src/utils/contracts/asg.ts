import { useConfigInfo } from '@/utils/hooks/config';
import { ethers, utils } from 'ethers';
import { getProvider, preContractRequest } from './ultilities';

const useASG = () => {
  const config = useConfigInfo();

  const createNewContract = (
    signerOrProvider: ethers.Signer | ethers.providers.Provider,
  ) => {
    return new ethers.Contract(
      config.CONTRACTS.ASG[0],
      config.CONTRACTS.ASG[1],
      signerOrProvider,
    );
  };

  const getBalance = async (address: string) => {
    const provider = await getProvider();
    const contract = createNewContract(provider);
    const result = await contract.balanceOf(address);
    return result;
  };

  const transferToInGameWallet = async (amount: number) => {
    const provider = await getProvider();
    const signer = await provider.getSigner();
    const contract = createNewContract(signer);

    console.log('contract', contract);
    const price = utils.parseEther(amount.toString()).toString();
    return await contract.transfer(config.CONTRACTS.IN_GAME_WALLET, price);
  };

  return {
    getBalance,
    transferToInGameWallet: (amount: number) =>
      preContractRequest(transferToInGameWallet, amount, true),
  };
};

export default useASG;
