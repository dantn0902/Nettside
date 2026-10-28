import { Link, useParams } from "react-router-dom";
import "../styles/post.css";
import "../styles/main.css";
import { getPostBySlug } from "../data/posts";

export default function Post() {
  const { slug } = useParams<{ slug: string }>();
  const post = getPostBySlug(slug);

  if (!post) {
    return (
      <div id="main">
        <h2>Post not found</h2>
        <p>The post may have been moved or does not exist.</p>
        <Link to="/blog">← Back to Thanh's Blog</Link>
      </div>
    );
  }

  return (
    <>
      <div id="page-header">
        <Link to="/blog" style={{ color: "#800000", marginBottom: 0 }}>
          <h2>← Back to Thanh's Blog</h2>
        </Link>

        <div id="title-card">
          <h1 id="post-name-title">{post.title}</h1>
          <p id="post-date">{post.date}</p>
          <p id="post-desc">{post.description}</p>
        </div>
      </div>

      <article id="post-content">
        {post.content.split(/\n\s*\n/).map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </article>
    </>
  );
}
