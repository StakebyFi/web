"use client";

import '@rainbow-me/rainbowkit/styles.css';

import type { ThemeProviderProps } from "next-themes";
import { RainbowKitProvider, darkTheme } from '@rainbow-me/rainbowkit'

import { HeroUIProvider } from "@heroui/system";
import { useRouter } from "next/navigation";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import { WagmiProvider } from 'wagmi';
import { sonicBlazeTestnet } from 'wagmi/chains';
import { config } from "@/lib/wagmi";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

declare module "@react-types/shared" {
  interface RouterConfig {
    routerOptions: NonNullable<
      Parameters<ReturnType<typeof useRouter>["push"]>[1]
    >;
  }
}

const queryClient = new QueryClient();

export default function Providers({ children, themeProps }: ProvidersProps) {
  const router = useRouter();

  return (
    <HeroUIProvider navigate={router.push}>
      <QueryClientProvider client={queryClient}>
        <WagmiProvider config={config}>
          <RainbowKitProvider
            theme={darkTheme({
              accentColor: '#7b3fe4',
              accentColorForeground: 'white',
              borderRadius: 'small',
              fontStack: 'system',
              overlayBlur: 'small',
            })}
            modalSize='compact'
            initialChain={sonicBlazeTestnet}
          >
            <NextThemesProvider {...themeProps}>
              {children}
            </NextThemesProvider>
          </RainbowKitProvider>
        </WagmiProvider>
      </QueryClientProvider>
    </HeroUIProvider>
  );
}
