'use client';
import React, { ReactNode } from 'react';
import { config, projectId } from './config';
import { createWeb3Modal } from '@web3modal/wagmi/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { State, WagmiProvider } from 'wagmi';

const queryClient = new QueryClient();

if (!projectId) throw new Error('Project ID is not defined');

// DITO ANG SIKRETO: Siguraduhin na ito ay tinatawag lang sa client
createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true, 
  themeMode: 'dark',
  themeVariables: {
    '--w3m-accent': '#f59e0b', 
  }
});

export default function Web3Provider({
  children,
  initialState
}: {
  children: ReactNode;
  initialState?: State;
}) {
  return (
    <WagmiProvider config={config} initialState={initialState}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </WagmiProvider>
  );
}