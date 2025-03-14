import { TransactionCallbackParams } from "@useelven/core";
import { useState, useCallback } from "react";

export const useTransactionState = (setIsModalTransactionOpen: (isOpen: boolean) => void) => {
  const [result, setResult] = useState<{ type: string; content: string }>();
  const [pending, setPending] = useState(false);
  const [error, setError] = useState<string>();

  const handleTxCb = useCallback(
    ({ transaction, pending, error }: TransactionCallbackParams) => {
      if (transaction) {
        setResult({ type: 'tx', content: transaction.getHash().hex() });
        setIsModalTransactionOpen(true);
        setPending(false);
        setError(undefined);
      }
      if (pending) {
        setPending(true);
        setError(undefined);
        setResult(undefined);
      }
      if (error) {
        setError(error);
        setPending(false);
        setResult(undefined);
      }
    },
    [setIsModalTransactionOpen]
  );

  return {
    pending,
    error,
    result,
    handleTxCb
  }
}