import fs from "fs";
import path from "path";

type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
  video?: string;
};

function getHTMLFiles(dir: string) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".html");
}

function parseMetadata(content: string): { metadata: Metadata; html: string } {
  const metadataMatch = content.match(/<!--\s*({[\s\S]*?})\s*-->/);
  let metadata: Metadata = {
    title: "Untitled Experiment",
    publishedAt: new Date().toISOString(),
    summary: "",
  };

  if (metadataMatch) {
    try {
      metadata = JSON.parse(metadataMatch[1]);
    } catch (error) {
      console.warn("Invalid metadata format in HTML file");
    }
  }

  const html = content.replace(/<!--\s*({[\s\S]*?})\s*-->/, "");
  return { metadata, html };
}

export async function getExperiment(slug: string) {
  const filePath = path.join(process.cwd(), "experiments", `${slug}.html`);
  const source = fs.readFileSync(filePath, "utf-8");
  const { metadata, html } = parseMetadata(source);

  return {
    source: html,
    metadata,
    slug,
  };
}

async function getAllExperiments(dir: string) {
  const htmlFiles = getHTMLFiles(dir);
  return Promise.all(
    htmlFiles.map(async (file) => {
      const slug = path.basename(file, path.extname(file));
      const { metadata, source } = await getExperiment(slug);
      return {
        metadata,
        slug,
        source,
      };
    })
  );
}

export async function getExperiments() {
  return getAllExperiments(path.join(process.cwd(), "experiments"));
}
