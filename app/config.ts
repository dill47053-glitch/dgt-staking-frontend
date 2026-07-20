import { cookieStorage, createStorage } from 'wagmi';
import { mainnet } from 'wagmi/chains';
import { WagmiAdapter } from '@reown/appkit-adapter-wagmi';

// ILAGAY DITO ANG IYONG PROJECT ID
export const projectId = 'eac0386fddae4d7447fec847279447d7'; 

if (!projectId) {
  throw new Error('Project ID is not defined');
}

export const networks = [mainnet];

export const wagmiAdapter = new WagmiAdapter({
  storage: createStorage({
    storage: cookieStorage,
  }),
  ssr: true,
  projectId,
  networks,
});

export const config = wagmiAdapter.wagmiConfig;