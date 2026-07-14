import { defaultWagmiConfig } from '@web3modal/wagmi/react/config'
import { cookieStorage, createStorage } from 'wagmi'
import { mainnet, sepolia } from 'wagmi/chains'

export const projectId = 'eac0386fddae4d7447fec847279447d7'

if (!projectId) throw new Error('Project ID is not defined')

const metadata = {
  name: 'Digital Gold Token',
  description: 'DGT Web3 Staking Dashboard',
  url: 'https://digital-gold-token.vercel.app', 
  icons: ['https://i.postimg.cc/FHcpQGs8/opengraph-image.png']
}

export const config = defaultWagmiConfig({
  chains: [mainnet, sepolia], 
  projectId,
  metadata,
  ssr: true,
  storage: createStorage({
    storage: cookieStorage
  }),
})