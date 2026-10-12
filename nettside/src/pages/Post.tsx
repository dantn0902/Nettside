import "../styles/post.css";
import "../styles/main.css";

export default function Post() {
  return (
    <>
      <div id="page-header">
        <a href="/blog" style={{ color: "#800000", marginBottom: "0" }}>
          <h2>← Back to Thanh's Blog</h2>
        </a>
        <div id="title-card">
          <h1 id="post-name-title"></h1>
          <p id="post-date"></p>
          <p id="post-desc"></p>
        </div>
      </div>

      <article id="post-content">Loading…</article>
    </>
  );
}
