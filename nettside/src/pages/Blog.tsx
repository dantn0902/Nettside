import { useEffect, useState } from "react";
import "../styles/blog.css";

export default function Blog() {
  const [content, setContent] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      const res = await fetch("/posts/creating-my-own-webpage.txt");
      const text = await res.text();
      setContent(text);
    }
    load();
  }, []);

  return (
    <div id="main">
      <h2 id="name-title" style={{ textDecoration: "underline" }}>
        Thanh's Blog
      </h2>
      <div id="post-list">{content ? "Post loaded" : "Loading…"}</div>
    </div>
  );
}
