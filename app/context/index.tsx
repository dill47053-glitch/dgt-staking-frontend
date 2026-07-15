'use client';
import { createAppKit } from '@reown/appkit/react';
import { EthersAdapter } from '@reown/appkit-adapter-ethers';
import { mainnet, sepolia } from '@reown/appkit/networks';

// Ito ang ID mula sa dashboard mo
const projectId = 'd9bb60b13571d87e0766110972755571';

const metadata = {
  name: 'Digital Gold Token',
  description: 'DGT Staking Dashboard',
  url: 'https://dgt-official.com',
  icons: ['https://avatar.githubusercontent.com/u/179229932']
};

export const modal = createAppKit({
  adapters: [new EthersAdapter()],
  networks: [mainnet, sepolia],
  metadata,
  projectId,
  features: { analytics: true }
});

export function AppKitProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}