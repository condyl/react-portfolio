import { getExperiment } from "@/data/experiments"; // Adjust the path if needed
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { DATA } from "@/data/resume";
import { Icons } from "@/components/icons";
import ShimmerButton from "@/components/ui/shimmer-button";

export default async function ExperimentPage({
    params,
}: {
    params: {
        slug: string;
    };
}) {
    const experiment = await getExperiment(params.slug);

    if (!experiment) {
        notFound();
    }

    return (
        <section id="experiment">
            <h1
                className="title font-medium text-2xl tracking-tighter max-w-[650px] flex items-center font-sans"
                style={{ position: "absolute", top: 25, left: 20, color: "black" }}
            >
                {experiment.metadata.title}{" "}
                <a
                    href={`https://github.com/condyl/react-portfolio/blob/main/experiments/${experiment.slug}.html`}
                    target="_blank"
                    className="flex items-center gap-2"
                >
                    <ShimmerButton className="shadow-3xl rounded-full p-2 ml-2">
                        <Icons.github className="size-5" style={{ color: "white" }} />
                    </ShimmerButton>
                </a>
            </h1>

            <iframe
                srcDoc={experiment.source}
                title={experiment.metadata.title}
                className="experiment-iframe"
                style={{
                    width: "100%",
                    height: "100vh",
                    border: "none",
                }}
            />
        </section>
    );
}
