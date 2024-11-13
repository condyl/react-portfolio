import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getExperiments } from "@/data/experiments";
import { Icons } from "@/components/icons";
import Link from "next/link";
import { DATA } from "@/data/resume";
import { ProjectCard } from "@/components/project-card";
import ReactGA from "react-ga4";

ReactGA.send({ hitType: "pageview", page: window.location.pathname, title: "Experiment Home" });

export const metadata = {
    title: "Blog",
    description: "My thoughts on software development, life, and more.",
};

const BLUR_FADE_DELAY = 0.04;

export default async function BlogPage() {
    const experiments = await getExperiments();

    return (
        <section className="max-w-2xl mx-auto py-12 sm:py-24 px-6">
            <BlurFade delay={BLUR_FADE_DELAY}>
                <section id="hero">
                    <div className="mx-auto w-full max-w-2xl space-y-8">
                        <div className="gap-2 flex justify-between">
                            <div className="flex-col flex flex-1 space-y-1.5">
                                <BlurFadeText
                                    delay={BLUR_FADE_DELAY}
                                    className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none"
                                    yOffset={8}
                                    text={`Hi, I'm ${DATA.name.split(" ")[0]} 👋`}
                                />
                                <BlurFadeText
                                    className="max-w-[600px] md:text-xl"
                                    delay={BLUR_FADE_DELAY}
                                    text={DATA.description}
                                />
                            </div>
                            <BlurFade delay={BLUR_FADE_DELAY}>
                                <Avatar className="size-28 border">
                                    <AvatarImage alt={DATA.name} src={DATA.avatarUrl} />
                                    <AvatarFallback>{DATA.initials}</AvatarFallback>
                                </Avatar>
                            </BlurFade>
                        </div>
                    </div>
                </section>
                <BlurFade delay={BLUR_FADE_DELAY * 3}>
                    <h2 className="text-xl font-bold">Experiments</h2>
                </BlurFade>
            </BlurFade>
            <div className="grid gap-4 grid-cols-2">
                {experiments
                    .map((experiment, id) => (
                        <BlurFade delay={BLUR_FADE_DELAY * 2 + id * 0.05} key={experiment.slug}>
                            <ProjectCard
                                id={experiment.slug}
                                title={experiment.metadata.title}
                                href={`/experiments/${experiment.slug}`}
                                description={experiment.metadata.summary}
                                dates={experiment.metadata.publishedAt}
                                tags={[]}
                                image={experiment.metadata.image}
                                links={[
                                    {
                                        icon: <Icons.globe className="size-3" />, // replace with actual icon
                                        type: "Live Demo",
                                        href: `/experiments/${experiment.slug}`
                                    }
                                ]}
                            />
                        </BlurFade>
                    ))}
            </div>
        </section>
    );
}
