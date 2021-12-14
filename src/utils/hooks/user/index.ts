import { apiMeta, API_META_PATHS } from '@/utils/apis';
import { ENVIRONMENTS } from '@/utils/constants/environments';
import { decrypt, encrypt } from '@/utils/normalizers';
import { useRequest } from '@umijs/hooks';
import { sha256 } from 'js-sha256';
import { useWalletState } from '../connect/wallet';

const useUser = (address: string) => {
  const [walletState, setWalletState] = useWalletState();

  useRequest(
    async () => {
      const timestamp = Date.now();
      const secret_key = ENVIRONMENTS.ZITGA_SECRET_KEY;

      const body = encrypt(
        JSON.stringify({
          0: sha256(address + timestamp + secret_key),
          1: address,
          2: timestamp,
        }),
      );

      try {
        const playerInfo = await apiMeta.post(API_META_PATHS.PLAYER_INFO, {
          headers: { 'content-type': 'text/plain' },
          data: body,
        });

        const [playerId, ASG, SAE, nftAddress, name] = decrypt(playerInfo);

        return {
          playerId,
          ASG,
          SAE,
          name,
          nftAddress,
          myAddress: address,
        };
      } catch (error) {
        console.log('error', error);
        return {
          myAddress: address,
          playerId: undefined,
          ASG: undefined,
          SAE: undefined,
          name: undefined,
          nftAddress: undefined,
        };
      }
    },
    {
      refreshDeps: [address],
      onSuccess: (r) => {
        setWalletState({
          ...walletState,
          userInfo: {
            ...r,
            loading: false,
          },
        });
      },
    },
  );
};

export default useUser;
