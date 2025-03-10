"use client"

import { useAccount } from '@useelven/core';
import GenerateComponent from './_components/GenerateComponent'
import WalletConnection from '@/components/wallet-connection';

export default function Page() {
  const { address } = useAccount();

  return (
    <section id='chat' className='flex-grow flex flex-col items-center justify-center relative'>
      {address ? <GenerateComponent /> : <WalletConnection />}
    </section>
  )
}