"use client"

import Link from "next/link";
import { Navbar as HeroUINavbar, NavbarContent, NavbarItem, NavbarMenu, NavbarMenuItem, NavbarMenuToggle } from "@heroui/navbar";
import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import { GithubIcon } from "@/components/icons";
import clsx from "clsx";
import { useState } from "react";
import { motion } from "framer-motion";
import { WalletComponents } from "./wallet";
import { usePathname } from "next/navigation";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <HeroUINavbar
      maxWidth="full"
      position="static"
      className="absolute rounded-full mt-5 backdrop-saturate-100 z-[100] max-w-[1200px] left-1/2 top-0 transform -translate-x-1/2"
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      style={{ backgroundColor: "rgba(255, 255, 255, 0.03)" }}
    >
      <NavbarContent className="basis-1/5 xl:basis-full hidden xl:flex xl:flex-row items-center" justify="start">
        <Link href="/home" title="Home">
          <Image src="/logo.png" alt="logo" className="min-w-15 min-h-15 w-15 h-15 rounded-full" width={50} height={50} />
        </Link>
        <div className="relative flex items-center w-fit">
          <div className="realtive flex p-1">
            {siteConfig.navItems.map((item) => (
              <NavbarItem
                key={item.href}
                className="relative navbar-item"
              >
                <Link
                  className={clsx(
                    "text-sm font-normal px-4 py-2 rounded-none",
                    pathname.startsWith(item.href) ? "text-foreground" : "text-gray-400"
                  )}
                  href={item.href}
                >
                  {pathname.startsWith(item.href) && (
                    <motion.span
                      layoutId="bubble"
                      className="absolute inset-0 z-10 border-b-2 border-primary -mb-1 mix-blend-difference rounded-none"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                    />
                  )}
                  <span className="z-10">{item.label}</span>
                </Link>
              </NavbarItem>
            ))}
          </div>
        </div>
      </NavbarContent>

      <NavbarContent className="hidden xl:flex basis-1/5 xl:basis-full items-center mb-3 pt-3" justify="end">
        <NavbarItem className="hidden xl:flex items-center gap-4">
          <Link target="_blank" href={siteConfig.links.github} title="GitHub">
            <GithubIcon className="text-default-500" />
          </Link>
          <ThemeSwitch />
          <WalletComponents />
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="xl:hidden basis-1 pl-4">
        <div className="flex justify-between items-center w-full">
          <NavbarMenuToggle className="p-5 -ml-5" />
          <div className="flex flex-row gap-3 items-center">
            <Link target="_blank" href={siteConfig.links.github} title="GitHub">
              <GithubIcon className="text-default-500" />
            </Link>
            <ThemeSwitch />
          </div>
        </div>
      </NavbarContent>

      <NavbarMenu className="z-[1000] absolute inset-0 full-height bg-background/50">
        <div className="mx-4 flex-col gap-5 flex-grow inline-flex py-10">
          <div className="inline-flex flex-col gap-5">
            {siteConfig.navMenuItems.map((item, index) => (
              <NavbarMenuItem key={`${item}-${index}`}>
                <Link
                  className={clsx(
                    "border-l-2 pl-5 h-10",
                    pathname.startsWith(item.href) ? "border-primary text-primary" : "border-transparent"
                  )}
                  color="foreground"
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </Link>
              </NavbarMenuItem>
            ))}
          </div>
          <WalletComponents />
        </div>
      </NavbarMenu>
    </HeroUINavbar>
  );
};
