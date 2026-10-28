import { Link } from "react-router-dom";
import "../styles/blog.css";
import { posts } from "../data/posts";

export default function Blog() {
  return (
    <div id="main">
      <h2 id="name-title" style={{ textDecoration: "underline" }}>
        Thanh's Blog
      </h2>

      <div id="post-list">
        {posts.length === 0 ? (
          <p>No posts found.</p>
        ) : (
          posts.map((post) => (
            <article key={post.slug} className="blog-post">
              <h3>
                <Link to={`/blog/${post.slug}`}>{post.title}</Link>
              </h3>

              {post.date && <p>{post.date}</p>}

              {post.description && <p>{post.description}</p>}

              <Link to={`/blog/${post.slug}`}>Read post →</Link>
            </article>
          ))
        )}
      </div>
    </div>
  );
}
