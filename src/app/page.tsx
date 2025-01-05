"use client";

import { HackathonCard } from "@/components/hackathon-card";
import HeroSection from "@/components/hero-section";
import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Button } from "@/components/ui/button";
import { DATA } from "@/data/resume";
import Link from "next/link";
import { useState } from "react";
import Markdown from "react-markdown";

const BLUR_FADE_DELAY = 0.04;
const INITIAL_PROJECT_COUNT = 4;

export default function Page() {
  const [showAllProjects, setShowAllProjects] = useState(false);

  const sortedProjects = [...DATA.projects].sort((a, b) => (a.order || 0) - (b.order || 0));
  const visibleProjects = showAllProjects ? sortedProjects : sortedProjects.slice(0, INITIAL_PROJECT_COUNT);

  return (
    <main className="flex flex-col min-h-[100dvh]">
      <HeroSection />
      
      <div className="mx-auto w-full max-w-2xl space-y-24 px-6 py-24">
        <section id="about">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <h2 className="text-xl font-bold">About</h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <Markdown className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert">
              {DATA.summary}
            </Markdown>
          </BlurFade>
        </section>

        <section id="work">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <h2 className="text-xl font-bold">Work Experience</h2>
            </BlurFade>
            {DATA.work.map((work, id) => (
              <BlurFade
                key={work.company}
                delay={BLUR_FADE_DELAY * 6 + id * 0.05}
              >
                <ResumeCard
                  key={work.company}
                  logoUrl={work.logoUrl}
                  altText={work.company}
                  title={work.company}
                  subtitle={work.title}
                  href={work.href}
                  badges={work.badges}
                  period={`${work.start} - ${work.end ?? "Present"}`}
                  description={work.description}
                  id={work.id}
                />
              </BlurFade>
            ))}
          </div>
        </section>

        <section id="education">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 7}>
              <h2 className="text-xl font-bold">Education</h2>
            </BlurFade>
            {DATA.education.map((education, id) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 8 + id * 0.05}
              >
                <ResumeCard
                  key={education.school}
                  href={education.href}
                  logoUrl={education.logoUrl}
                  altText={education.school}
                  title={education.school}
                  subtitle={education.degree}
                  period={`${education.start} - ${education.end}`}
                  id={education.id}
                  description={education.description}
                />
              </BlurFade>
            ))}
          </div>
        </section>

        <section id="projects">
          <div className="space-y-12 w-full">
            <BlurFade delay={BLUR_FADE_DELAY * 11}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                    My Projects
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    Check out my latest work
                  </h2>
                </div>
              </div>
            </BlurFade>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 max-w-[800px] mx-auto">
              {visibleProjects.map((project, id) => (
                <BlurFade
                  key={project.title}
                  delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                >
                  <ProjectCard
                    href={project.href}
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    dates={project.dates}
                    tags={project.technologies}
                    image={project.image}
                    video={project.video}
                    links={project.links}
                    companyName={project.companyName}
                    companyLogo={project.companyLogo}
                    id={project.id}
                  />
                </BlurFade>
              ))}
            </div>
            {!showAllProjects && DATA.projects.length > INITIAL_PROJECT_COUNT && (
              <BlurFade delay={BLUR_FADE_DELAY * 12 + visibleProjects.length * 0.05}>
                <div className="flex justify-center gap-3">
                  <Button
                    onClick={() => setShowAllProjects(true)}
                    variant="outline"
                  >
                    Show More Projects
                  </Button>
                </div>
              </BlurFade>
            )}
          </div>
        </section>

        <section id="hackathons">
          <div className="space-y-12 w-full">
            <BlurFade delay={BLUR_FADE_DELAY * 13}>
              <div className="flex flex-col items-center justify-center space-y-4 text-center">
                <div className="space-y-2">
                  <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                    Hackathons & Competitions
                  </div>
                  <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                    I like building things
                  </h2>
                </div>
              </div>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY * 14}>
              <ul className="mb-4 ml-4 divide-y divide-dashed border-l">
                {DATA.hackathons.map((project, id) => (
                  <BlurFade
                    key={project.title + project.dates}
                    delay={BLUR_FADE_DELAY * 15 + id * 0.05}
                  >
                    <HackathonCard
                      title={project.title}
                      description={project.description}
                      location={project.location}
                      dates={project.dates}
                      image={project.image}
                      placement={project.placement}
                      links={project.links}
                    />
                  </BlurFade>
                ))}
              </ul>
            </BlurFade>
          </div>
        </section>

        <section id="contact">
          <div className="grid items-center justify-center gap-4 px-4 text-center md:px-6 w-full">
            <BlurFade delay={BLUR_FADE_DELAY * 16}>
              <div className="space-y-3">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  Contact
                </div>
                <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">
                  Get in Touch
                </h2>
                <p className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Want to chat? Just shoot me a dm{" "}
                  <Link
                    href={DATA.contact.social.LinkedIn.url}
                    className="text-blue-500 hover:underline"
                    target="_blank"
                  >
                    with a direct question on LinkedIn
                  </Link>{" "}
                  and I&apos;ll respond whenever I can.
                </p>
              </div>
            </BlurFade>
          </div>
        </section>
      </div>
    </main>
  );
}
