'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { WagmiProvider } from 'wagmi';
import { RainbowKitProvider, RainbowKitSiweProvider } from '@rainbow-me/rainbowkit';
import { config } from '../wagmi'; // Reference the config from wagmi.ts

const queryClient = new QueryClient();

export function Providers({ children }) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitSiweProvider>
          <RainbowKitProvider>
            {children}
          </RainbowKitProvider>
        </RainbowKitSiweProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}