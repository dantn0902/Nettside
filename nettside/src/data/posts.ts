export type BlogPost = {
  slug: string;
  title: string;
  date: string;
  description: string;
  content: string;
};

// Load every .txt file as a raw string using Vite.
const postFiles = import.meta.glob("./posts/*.txt", {
  eager: true,
  query: "?raw",
  import: "default",
}) as Record<string, string>;

function parsePost(slug: string, raw: string): BlogPost {
  const lines = raw.replace(/^\uFEFF/, "").split(/\r?\n/);

  const metadata: Record<string, string> = {};
  let bodyStart = 0;

  // Read title, date and description from the beginning.
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i].trim();

    if (!line) {
      bodyStart = i + 1;
      break;
    }

    const match = line.match(/^(title|date|description):\s*(.*)$/i);

    if (match) {
      metadata[match[1].toLowerCase()] = match[2].trim();
    }
  }

  return {
    slug,
    title: metadata.title || slug,
    date: metadata.date || "",
    description: metadata.description || "",
    content: lines.slice(bodyStart).join("\n").trim(),
  };
}

export const posts: BlogPost[] = Object.entries(postFiles)
  .map(([path, raw]) => {
    const filename = path.split("/").pop() || "";
    const slug = filename.replace(/\.txt$/i, "");

    return parsePost(slug, raw);
  })
  .sort((a, b) => b.date.localeCompare(a.date));

export function getPostBySlug(slug: string | undefined): BlogPost | undefined {
  return posts.find((post) => post.slug === slug);
}
