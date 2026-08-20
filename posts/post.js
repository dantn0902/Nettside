function parsePostText(text) {
  const lines = text.split("\n");

  let title = "";
  let date = "";
  let description = "";

  let i = 0;

  while (i < lines.length) {
    const line = lines[i].trim();
    if (line === "") {
      i++;
      break;
    }

    if (line.startsWith("title:")) {
      title = line.slice("title:".length).trim();
    } else if (line.startsWith("date:")) {
      date = line.slice("date:".length).trim();
    } else if (line.startsWith("description:")) {
      description = line.slice("description:".length).trim();
    }

    i++;
  }

  const bodyLines = lines.slice(i);
  return { title, date, description, bodyLines };
}

async function loadPost() {
  const contentEl = document.getElementById("post-content");
  const params = new URLSearchParams(window.location.search);
  const slug = params.get("post");

  // Only support "creating-my-own-webpage" for now
  if (slug !== "creating-my-own-webpage") {
    contentEl.textContent = "Post not found.";
    return;
  }

  try {
    const res = await fetch("posts/creating-my-own-webpage.txt");
    if (!res.ok) {
      contentEl.textContent = "Failed to load post file: " + res.status;
      return;
    }

    const text = await res.text();
    const { title, date, description, bodyLines } = parsePostText(text);

    const bodyHtml = bodyLines
      .map((line) => line.trim())
      .filter((line) => line.length)
      .map((line) => `<p>${line}</p>`)
      .join("");

    document.getElementById("post-title").textContent = title;
    document.getElementById("post-date").textContent = date;
    document.getElementById("post-desc").textContent = description;

    contentEl.innerHTML = `
      <div class="post-body">
        ${bodyHtml}
      </div>
    `;
  } catch (err) {
    console.error(err);
    contentEl.textContent = "Error: " + err.message;
  }
}

loadPost();
