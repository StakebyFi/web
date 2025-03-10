import { cn } from '@/lib/utils';
import { Image } from '@heroui/image';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { motion } from 'framer-motion';

const ChainIcon = ({ iconUrl, name, background, size = 20 }: {
  iconUrl?: string;
  name?: string;
  background?: string;
  size?: number;
}) => (
  <div
    style={{
      background,
      width: size,
      height: size,
      borderRadius: 999,
      overflow: 'hidden',
      marginRight: 4,
    }}
  >
    {iconUrl && (
      <Image
        alt={`${name ?? 'Chain'} icon`}
        src={iconUrl}
        style={{ width: size, height: size }}
      />
    )}
  </div>
);

const ButtonSoniclabsCustom = ({
  delay = 0.1,
  buttonBaseStyles,
  onClick,
  children
}: {
  delay?: number;
  buttonBaseStyles?: string;
  onClick?: () => void;
  children?: React.ReactNode;
}) => {
  return (
    <motion.button
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      className="relative p-[1px] bg-gradient-sonic-mirrored rounded-full animate-gradient cursor-pointer z-20 transform"
      tabIndex={0}
      style={{ willChange: "transform, filter", filter: "brightness(1)", transform: "none" }}
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-gradient-sonic-mirrored animate-gradient rounded-full blur-sm group-hover:blur group-hover:brightness-125 transition"></div>
      <div className="relative z-10 bg-black/75 rounded-full flex items-center overflow-hidden opacity-100">
        <div className="px-3 py-1.5 flex items-center gap-x-2.5 opacity-100">
          <span className={cn("text-sm font-regular flex items-center", buttonBaseStyles)}>{children}</span>
        </div>
      </div>
    </motion.button>
  );
};

export function WalletComponents() {
  return <ConnectButtonWalletComponents />;
}

export const ConnectButtonWalletComponents = () => {
  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        mounted,
      }) => {
        if (!mounted) {
          return (
            <div
              aria-hidden="true"
              style={{
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none',
              }}
            />
          );
        }

        const connected = account && chain;

        if (!connected) {
          return (
            <ButtonSoniclabsCustom onClick={openConnectModal}>
              Connect Wallet
            </ButtonSoniclabsCustom>
          );
        }

        if (chain?.unsupported) {
          return (
            <ButtonSoniclabsCustom onClick={openChainModal}>
              Wrong network
            </ButtonSoniclabsCustom>
          );
        }

        return (
          <div className="w-fit flex-wrap flex gap-3 z-50">
            <ButtonSoniclabsCustom onClick={openChainModal} delay={0.1}>
              <ChainIcon
                iconUrl={"/logo-soniclabs.png"}
                name={chain.name}
                background={chain.iconBackground}
              />
              {chain.name}
            </ButtonSoniclabsCustom>

            <ButtonSoniclabsCustom onClick={openAccountModal} delay={0.2}>
              {account.displayName}
              {account.displayBalance && ` (${account.displayBalance})`}
            </ButtonSoniclabsCustom>
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};