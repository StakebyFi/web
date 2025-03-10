import React from 'react';
import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter } from '@heroui/modal';
import { Button } from '@heroui/button';
import { Input } from '@heroui/input';
import { ArrowRightLeft, Loader2 } from 'lucide-react';
import { formatUSD } from '@/lib/helper';
import { Link } from '@heroui/link';

interface ModalSwapProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  fromAmount: string;
  setFromAmount: (value: string) => void;
  toAmount: string;
  fromToken: string;
  toToken: string;
  isLoading?: boolean;
  maxFromAmount?: number;
}

const ModalSwap = ({
  isOpen,
  onClose,
  onConfirm,
  fromAmount,
  setFromAmount,
  toAmount,
  fromToken,
  toToken,
  isLoading = false,
  maxFromAmount = 0
}: ModalSwapProps) => {
  const handleFromAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (/^\d*\.?\d*$/.test(value) || value === '') {
      setFromAmount(value);
    }
  };

  const isAmountValid = fromAmount !== '' && Number(fromAmount) > 0 && Number(fromAmount) <= maxFromAmount;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalContent>
        <ModalHeader className="flex flex-col gap-1">
          <h2 className="text-xl font-bold">Swap {fromToken} to {toToken}</h2>
          <p className="text-sm text-slate-500">Enter the amount you want to swap</p>
        </ModalHeader>
        
        <ModalBody>
          <div className="space-y-4">
            <div className="relative">
              <Input
                type="text"
                value={fromAmount}
                onChange={handleFromAmountChange}
                placeholder="0.00"
                className="pr-16 text-lg"
                startContent={<ArrowRightLeft className="text-slate-400 w-4 h-4" />}
                endContent={<span className="text-slate-400">{fromToken}</span>}
              />
            </div>
            
            <div className="flex justify-between text-sm">
              <span className="text-slate-500">Available:</span>
              <span className="font-medium">{formatUSD(maxFromAmount)} {fromToken}</span>
            </div>
            
            <div className="relative">
              <Input
                type="text"
                value={toAmount}
                placeholder="0.00"
                className="pr-16 text-lg"
                disabled
                endContent={<span className="text-slate-400">{toToken}</span>}
              />
            </div>

            <p>Need more {fromToken}? Get it from the <Link href='/faucet'>faucet</Link>.</p>
          </div>
        </ModalBody>

        <ModalFooter>
          <Button variant="bordered" onPress={onClose} className="flex-1">
            Cancel
          </Button>
          <Button color="primary" onPress={onConfirm} className="flex-1" isDisabled={!isAmountValid || isLoading}>
            {isLoading ? (
              <Loader2 className="w-4 h-4 animate-spin" />
            ) : (
              `Swap ${fromToken} to ${toToken}`
            )}
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ModalSwap;