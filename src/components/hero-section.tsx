"use client";

import { DATA } from "@/data/resume";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { motion } from "framer-motion";
import { Waves } from "@/components/ui/waves-background";

const BLUR_FADE_DELAY = 0.04;

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[100dvh] flex-col pt-20 overflow-hidden">
      {/* Waves background */}
      <motion.div
        className="absolute inset-0 -z-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: BLUR_FADE_DELAY * 6 }}
      >
        <Waves 
          waveSpeedX={0.0125}
          waveSpeedY={0.005}
          waveAmpX={32}
          waveAmpY={16}
          className="opacity-30"
          lineColor="#ABABAB"
          backgroundColor="transparent"
        />
      </motion.div>

      {/* Background gradient */}
      <motion.div 
        className="absolute inset-0 -z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: BLUR_FADE_DELAY * 6 }}
      >
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,var(--background)_0%,var(--background)_75%,transparent_100%)]" />
      </motion.div>
      
      <div className="flex-1 flex items-center justify-center pointer-events-none">
        <div className="container flex flex-col items-center justify-center gap-6 text-center">
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 100,
              damping: 20,
              delay: BLUR_FADE_DELAY,
            }}
            className="pointer-events-auto relative group"
          >
            <div className="absolute -inset-0.5 bg-gradient-to-r from-foreground/20 to-foreground/0 rounded-full blur opacity-0 group-hover:opacity-100 transition duration-500" />
            <Avatar className="size-32 border sm:size-40 relative">
              <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
              <AvatarFallback>{DATA.initials}</AvatarFallback>
            </Avatar>
          </motion.div>

          <div className="space-y-4 w-full">
            <div className="flex items-center justify-center gap-2">
              <BlurFadeText
                delay={BLUR_FADE_DELAY * 2}
                className="text-4xl font-bold tracking-tighter sm:text-6xl xl:text-7xl/none bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70 text-center"
                yOffset={8}
                text={`Hi, I'm ${DATA.name.split(" ")[0]}`}
              />
              <BlurFade delay={BLUR_FADE_DELAY * 2}>
                <span className="text-4xl sm:text-6xl xl:text-7xl animate-wave inline-block">👋</span>
              </BlurFade>
            </div>

            <BlurFadeText
              className="mx-auto max-w-[600px] text-base text-muted-foreground md:text-xl"
              delay={BLUR_FADE_DELAY * 3}
              text={DATA.description}
            />
          </div>

          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <div className="flex flex-col items-center gap-6 pointer-events-auto">
              <motion.div
                className="flex flex-wrap items-center justify-center gap-3"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{
                  type: "spring",
                  stiffness: 100,
                  damping: 20,
                  delay: BLUR_FADE_DELAY * 4,
                }}
              >
                {Object.entries(DATA.contact.social)
                  .filter(([_, social]) => social.navbar)
                  .map(([name, social]) => (
                    <a
                      key={name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 rounded-full bg-muted/50 hover:bg-muted px-4 py-2 text-sm text-muted-foreground transition-all duration-300 hover:scale-105"
                    >
                      <social.icon className="size-4" />
                      <span>{name}</span>
                    </a>
                  ))}
              </motion.div>

            </div>
          </BlurFade>
        </div>
      </div>

      <BlurFade delay={BLUR_FADE_DELAY * 5}>
        <div className="flex justify-center pb-8 pointer-events-auto">
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: 10 }}
            transition={{
              repeat: Infinity,
              repeatType: "reverse",
              duration: 1,
              ease: "easeInOut",
            }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-sm">Scroll to explore</span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="size-4"
            >
              <path d="M12 5v14" />
              <path d="m19 12-7 7-7-7" />
            </svg>
          </motion.div>
        </div>
      </BlurFade>
    </section>
  );
} 