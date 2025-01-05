"use client";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import Markdown from "react-markdown";

interface ResumeCardProps {
  logoUrl: string;
  altText: string;
  title: string;
  subtitle?: string;
  href?: string;
  badges?: readonly string[];
  period: string;
  description?: string;
  id: string;
}

export const ResumeCard = ({
  logoUrl,
  altText,
  title,
  subtitle,
  href,
  badges,
  period,
  description,
  id,
}: ResumeCardProps) => {
  const [isExpanded, setIsExpanded] = React.useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    if (description) {
      e.preventDefault();
      setIsExpanded(!isExpanded);
    }
  };

  return (
    <Link
      href={href || "#"}
      className="block cursor-pointer"
      onClick={handleClick}
      id={id}
    >
      <Card className="flex overflow-hidden border hover:shadow-lg transition-all duration-300 ease-out">
        <div className="w-24 shrink-0 bg-muted flex items-center">
          <div className="relative h-24 w-24 px-3 py-4">
            <Image
              src={logoUrl}
              alt={altText}
              fill
              className="object-contain"
            />
          </div>
        </div>
        <motion.div 
          className="flex flex-col flex-1"
          animate={{ 
            minHeight: isExpanded ? "auto" : "96px"
          }}
          transition={{
            duration: 0.7,
            ease: [0.16, 1, 0.3, 1],
          }}
        >
          <div className="flex flex-col flex-1 justify-center h-full px-4 py-2">
            <div className="flex items-center justify-between">
              <CardTitle className="text-base">{title}</CardTitle>
              <time className="font-sans text-xs text-muted-foreground">{period}</time>
            </div>
            {subtitle && (
              <div className="font-sans text-xs text-muted-foreground mt-1">{subtitle}</div>
            )}
            {description && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{
                  opacity: isExpanded ? 1 : 0,
                  height: isExpanded ? "auto" : 0,
                }}
                transition={{
                  duration: 0.7,
                  ease: [0.16, 1, 0.3, 1],
                }}
              >
                <Markdown className="prose max-w-full text-pretty font-sans text-xs text-muted-foreground dark:prose-invert mt-2">
                  {description}
                </Markdown>
              </motion.div>
            )}
            {badges && badges.length > 0 && (
              <div className="flex flex-wrap gap-1 mt-2">
                {badges.map((badge, index) => (
                  <Badge
                    variant="secondary"
                    className="px-1 py-0 text-[10px]"
                    key={index}
                  >
                    {badge}
                  </Badge>
                ))}
              </div>
            )}
          </div>
        </motion.div>
      </Card>
    </Link>
  );
};
