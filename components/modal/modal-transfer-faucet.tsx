import React from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from '@heroui/modal';
import { Button } from '@heroui/button';
import { Input } from '@heroui/input';
import { Send, Loader2 } from 'lucide-react';
import { formatNumberOri } from '@/lib/custom-helper';
import { Image } from '@heroui/image';
import Link from 'next/link';
import { DECIMALS_TOKEN } from '@/lib/constants';
import { useBalance } from '@/hooks/query/useBalance';

interface ModalTransferFaucetProps {
  isOpen: boolean;
  onClose: () => void;
  onTransfer: () => void;
  amount: string;
  setAmount: (value: string) => void;
  recipient: string;
  setRecipient: (value: string) => void;
  token: string;
  isLoading?: boolean;
  tokenAddress: HexAddress;
  logoToken?: string;
}

const ModalTransferFaucet = ({
  isOpen,
  onClose,
  onTransfer,
  amount,
  setAmount,
  recipient,
  setRecipient,
  token,
  isLoading = false,
  tokenAddress,
  logoToken
}: ModalTransferFaucetProps) => {

  const { bNormalized } = useBalance({ token: tokenAddress as HexAddress, decimals: DECIMALS_TOKEN });

  const maxAmount = bNormalized || 0;

  const handleAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value) || value === '') {
      setAmount(value);
    }
  };

  const handleRecipientChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRecipient(e.target.value);
  };

  const isAmountValid = amount !== '' && Number(amount) > 0 && Number(amount) <= maxAmount;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">
          <h2 className="text-xl font-bold">Transfer {token} to AI Wallet</h2>
          <p className="text-sm text-slate-500">Enter the amount</p>
        </ModalHeader>

        <ModalBody>
          <div className="space-y-4">
            <div className="relative">
              <Input
                type="text"
                value={amount}
                onChange={handleAmountChange}
                placeholder="0.00"
                className="text-lg"
                startContent={<Send className="text-slate-400 w-4 h-4" />}
                endContent={(
                  <div className='flex flrx-row gap-1 items-center w-auto'>
                    <Image src={logoToken || "/logo-soniclabs.png"} alt={token} width={24} height={24} className="rounded-full min-w-5 min-h-5 w-5 h-5 object-contain" />
                    <span className="text-slate-400">{token}</span>
                  </div>
                )}
              />
            </div>

            <div className="flex justify-between text-sm">
              <span className="text-slate-500">Available:</span>
              <span className="font-medium">{formatNumberOri(maxAmount, { decimals: 2 })} {token}</span>
            </div>
            
            <p>Need more {token}? Get it from the <Link href='/faucet' className='text-blue-500'>faucet</Link>.</p>

            <div className="relative">
              <Input
                type="text"
                value={recipient}
                onChange={handleRecipientChange}
                placeholder="Recipient Address"
                className="text-lg"
                disabled
              />
            </div>
          </div>
        </ModalBody>

        <ModalFooter>
          <Button variant="bordered" onPress={onClose} className="flex-1">
            Cancel
          </Button>
          <Button color="warning" onPress={onTransfer} className="flex-1" isDisabled={!isAmountValid || isLoading}>
            {isLoading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              <div className='flex flrx-row gap-1 items-center w-auto'>
                <span>Send</span>
                <Image src={logoToken || "/logo-soniclabs.png"} alt={token} width={24} height={24} className="rounded-full min-w-5 min-h-5 w-5 h-5 object-contain" />
              </div>
            )}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalTransferFaucet;