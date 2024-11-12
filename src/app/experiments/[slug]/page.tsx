import { getExperiment } from "@/data/experiments"; // Adjust the path if needed
import { notFound } from "next/navigation";
import { Suspense } from "react";
import { DATA } from "@/data/resume";

// Fetch the experiment data based on the slug
export default async function ExperimentPage({
    params,
}: {
    params: {
        slug: string;
    };
}) {
    const experiment = await getExperiment(params.slug);

    if (!experiment) {
        notFound(); // Handle the case where the experiment is not found
    }

    return (
        <section id="experiment">
            <h1 className="title font-medium text-2xl tracking-tighter max-w-[650px]" style={{ position: "absolute", top: 25, left: 20, color: "black"}}>
                {experiment.metadata.title}
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
