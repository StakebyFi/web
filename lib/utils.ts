import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export function urlScanner({ address, txHash, type }: { address?: string, txHash?: string, type?: 'transaction' | 'address' }) {
  return `https://devnet-explorer.multiversx.com/search/${address || txHash}`;
}