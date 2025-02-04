"use client";

import {
  MorphingDialog,
  MorphingDialogTrigger,
  MorphingDialogContent,
  MorphingDialogTitle,
  MorphingDialogImage,
  MorphingDialogSubtitle,
  MorphingDialogClose,
  MorphingDialogDescription,
  MorphingDialogContainer,
} from "@/components/ui/morphing-dialog";
import { Badge } from "@/components/ui/badge";
import { ExpandableButton } from "@/components/ui/expandable-button";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import Markdown from "react-markdown";

interface Props {
  title: string;
  href?: string;
  description: string;
  dates: string;
  tags: readonly string[];
  link?: string;
  image?: string;
  video?: string;
  links?: readonly {
    icon: React.ReactNode;
    type: string;
    href: string;
  }[];
  className?: string;
  companyName?: string;
  companyLogo?: string;
  id: string;
}

export function ProjectCard({
  title,
  href,
  description,
  dates,
  tags,
  link,
  image,
  video,
  links,
  className,
  companyName,
  companyLogo,
  id,
}: Props) {
  return (
    <MorphingDialog
      id={id}
      transition={{
        type: "spring",
        bounce: 0.05,
        duration: 0.25,
      }}
    >
      <MorphingDialogTrigger id={id} className="flex h-full w-full flex-col overflow-hidden rounded-lg border bg-card text-card-foreground transition-colors hover:shadow-lg">
        {video && (
          <video
            src={video}
            autoPlay
            loop
            muted
            playsInline
            className="pointer-events-none mx-auto h-40 w-full object-cover object-top"
          />
        )}
        {image && (
          <MorphingDialogImage
            src={image}
            alt={title}
            className="h-40 w-full object-cover object-top"
          />
        )}
        <div className="flex flex-col p-4">
          <MorphingDialogTitle className="text-lg font-semibold">
            {title}
          </MorphingDialogTitle>
          <MorphingDialogSubtitle className="font-sans text-xs text-muted-foreground">
            {dates}
          </MorphingDialogSubtitle>
          {companyName && companyLogo && (
            <div className="mt-4 flex items-center space-x-2">
              <Image
                src={companyLogo}
                alt={`${companyName} logo`}
                width={24}
                height={24}
                className="object-contain"
              />
              <span className="text-xs text-muted-foreground">
                Affiliated with {companyName}
              </span>
            </div>
          )}
        </div>
      </MorphingDialogTrigger>

      <MorphingDialogContainer>
        <MorphingDialogContent className="pointer-events-auto relative flex w-full flex-col overflow-hidden rounded-lg border bg-card text-card-foreground sm:max-w-4xl">
          <div className="flex-none">
            {video && (
              <video
                src={video}
                autoPlay
                loop
                muted
                playsInline
                className="pointer-events-none mx-auto h-60 w-full object-cover object-top"
              />
            )}
            {image && (
              <MorphingDialogImage
                src={image}
                alt={title}
                className="h-60 w-full object-cover object-top"
              />
            )}
          </div>
          
          <div className="flex flex-col p-6">
            <div className="flex-none">
              <MorphingDialogTitle className="text-2xl font-semibold">
                {title}
              </MorphingDialogTitle>
              <MorphingDialogSubtitle className="font-sans text-sm text-muted-foreground">
                {dates}
              </MorphingDialogSubtitle>
            </div>

            <MorphingDialogDescription
              disableLayoutAnimation
              variants={{
                initial: { opacity: 0, y: 20 },
                animate: { opacity: 1, y: 0 },
                exit: { opacity: 0, y: 20 },
              }}
              className="mt-4 space-y-4"
            >
              <div className="prose max-h-[30vh] max-w-full overflow-y-auto text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
                <Markdown>{description}</Markdown>
              </div>

              {tags && tags.length > 0 && (
                <div className="flex flex-wrap gap-2">
                  {tags?.map((tag) => (
                    <Badge
                      className="px-2 py-1 text-xs"
                      variant="secondary"
                      key={tag}
                    >
                      {tag}
                    </Badge>
                  ))}
                </div>
              )}

              {links && links.length > 0 && (
                <div className="flex flex-row flex-wrap items-start gap-2">
                  {links?.map((link, idx) => (
                    <Link
                      href={link?.href}
                      key={idx}
                      target="_blank"
                      onClick={(e) => e.stopPropagation()}
                    >
                      <ExpandableButton
                        key={idx}
                        icon={link.icon}
                        text={link.type}
                        variant="secondary"
                        size="sm"
                        className="text-xs"
                      />
                    </Link>
                  ))}
                </div>
              )}

              {companyName && companyLogo && (
                <div className="flex items-center space-x-2">
                  <Image
                    src={companyLogo}
                    alt={`${companyName} logo`}
                    width={24}
                    height={24}
                    className="object-contain"
                  />
                  <span className="text-xs text-muted-foreground">
                    Affiliated with {companyName}
                  </span>
                </div>
              )}
            </MorphingDialogDescription>
          </div>
          <MorphingDialogClose />
        </MorphingDialogContent>
      </MorphingDialogContainer>
    </MorphingDialog>
  );
}
