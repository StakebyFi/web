'use client';

import { FC } from 'react';
import { useLogin, useLogout } from '@useelven/core';
import { LoginComponent } from './login-component';
import { Button } from '@heroui/button';
import { Modal, ModalBody, ModalContent, ModalFooter, ModalHeader, useDisclosure } from '@heroui/modal';
import { useEffectOnlyOnUpdate } from '@/hooks/useEffectOnlyOnUpdate';

interface LoginModalButtonProps {
  onClose?: () => void;
  onOpen?: () => void;
}

export const LoginModalButton: FC<LoginModalButtonProps> = ({
  onClose,
  onOpen,
}) => {
  const { isLoggedIn, isLoggingIn } = useLogin();

  const { isOpen: isOpenM, onOpen: onOpenM, onOpenChange, onClose: onCloseM } = useDisclosure();

  const { logout } = useLogout();

  useEffectOnlyOnUpdate(() => {
    if (isLoggedIn) {
      onCloseM();
      onClose?.();
    }
  }, [isLoggedIn]);

  const handleOpen = () => {
    onOpenM();
    onOpen?.();
  };

  return (
    <>
      {isLoggedIn ? (
        <Button variant="bordered" onPress={() => logout()}>
          Disconnect
        </Button>
      ) : (
        <Button variant="bordered" onPress={handleOpen}>
          {isLoggingIn ? 'Connecting...' : 'Connect'}
        </Button>
      )}
      <Modal isOpen={isOpenM} onOpenChange={onOpenChange}>
        <ModalContent className="max-w-xs sm:max-w-lg bg-white dark:bg-zinc-950 p-0">
          <ModalHeader className="flex flex-col gap-1">Modal Title</ModalHeader>
          <ModalBody>
            <div className="grid gap-4 overflow-y-auto max-h-[calc(100vh-160px)] px-6 pb-12 pt-6">
              <LoginComponent />
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onPress={onCloseM}>
              Close
            </Button>
            <Button color="primary" onPress={onCloseM}>
              Action
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
