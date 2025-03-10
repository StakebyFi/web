"use client";

import { subtitle } from "@/components/primitives";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import particlesOptions from "@/components/animation/snow.json";
import { loadFull } from "tsparticles";
import { ISourceOptions } from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@heroui/button";

export default function Page() {
  const [init, setInit] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  return (
    <section
      id="home"
      className="inline-flex w-full h-full items-center justify-center flex-grow"
    >
      {init && (
        <Particles
          options={particlesOptions as unknown as ISourceOptions}
        />
      )}
      <div className="max-w-lg text-center inline-block z-10">
        <div className="flex flex-col items-center justify-center gap-1">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="flex flex-col items-center justify-center -space-y-3"
          >
            <motion.span
              className={cn(subtitle({ sizeText: "txl" }), "font-bold")}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              StakebyFi
            </motion.span>
            <motion.span
              className={subtitle()}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Stake your assets based on your risk profile.
            </motion.span>
          </motion.div>
          <Link href="/generate">
            <Button variant="shadow" color="primary">
              Lets Go
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
