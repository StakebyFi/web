import { cn } from '@/lib/utils';
import { motion } from 'framer-motion'
import React from 'react'

export const ButtonSoniclabs = ({
  text = "",
  textTag = <></>,
  delay = 0.5,
  classNameText,
  disabled = false,
  onClick = () => { },
  fullWidth = false,
  type = "button"
}: {
  text?: string;
  textTag?: React.ReactNode;
  delay?: number;
  classNameText?: string;
  disabled?: boolean;
  onClick?: () => void;
  fullWidth?: boolean;
  type?: "submit" | "button";
}) => {
  return (
    <motion.button
      type={type}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      className={cn("relative p-[2px] bg-gradient-sonic-mirrored rounded-lg animate-gradient cursor-pointer z-20 transform", fullWidth ? "w-full" : "w-fit")}
      tabIndex={0}
      style={{ willChange: "transform, filter", filter: "brightness(1)", transform: "none" }}
      onClick={onClick}
      disabled={disabled}
    >
      <div className="relative z-10 bg-black/75 rounded-md flex items-center overflow-hidden opacity-100">
        <div className="px-3 py-1.5 flex items-center justify-center gap-x-2.5 opacity-100 w-full">
          {text !== "" ? (
            <span className={cn("text-body-base font-medium", classNameText)}>{text}</span>
          ) : (
            textTag
          )
          }
        </div>
      </div>
    </motion.button>
  )
}

export const ButtonSoniclabsGlow = ({
  delay = 0.1,
  buttonBaseStyles,
  onClick,
  text
}: {
  delay?: number;
  buttonBaseStyles?: string;
  onClick?: () => void;
  text?: string;
}) => {
  return (
    <motion.button
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: delay }}
      className="relative p-[1px] bg-gradient-sonic-mirrored rounded-md animate-gradient cursor-pointer z-20 transform w-fit"
      tabIndex={0}
      style={{ willChange: "transform, filter", filter: "brightness(1)", transform: "none" }}
      onClick={onClick}
    >
      <div className="absolute inset-0 bg-gradient-sonic-mirrored animate-gradient rounded-md blur-sm group-hover:blur group-hover:brightness-125 transition"></div>
      <div className="relative z-10 bg-black/75 rounded-md flex items-center overflow-hidden opacity-100">
        <div className="px-3 py-2 flex items-center gap-x-2.5 opacity-100">
          <span className={cn("text-sm font-regular flex items-center", buttonBaseStyles)}>{text}</span>
        </div>
      </div>
    </motion.button>
  );
};