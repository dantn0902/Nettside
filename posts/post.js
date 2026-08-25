function parsePostText(text) {
  const lines = text.replace(/\r\n/g, "\n").split("\n");

  let title = "";
  let date = "";
  let description = "";

  let i = 0;

  // Read data until first blank line
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

    const bodyHtml = (() => {
      const paras = [];
      let current = [];

      for (const rawLine of bodyLines) {
        const line = rawLine.trim();

        if (line === "") {
          if (current.length) {
            paras.push(current.join(" "));
            current = [];
          }
        } else {
          current.push(line);
        }
      }

      // last paragraph
      if (current.length) {
        paras.push(current.join(" "));
      }

      return paras.map((p) => `<p>${p}</p>`).join("");
    })();

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
