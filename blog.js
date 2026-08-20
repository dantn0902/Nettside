function parsePostText(text) {
  const lines = text.split("\n");

  let title = "";
  let date = "";
  let description = "";

  let i = 0;

  // Read header lines
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

  // Rest body
  const bodyLines = lines.slice(i);
  return { title, date, description, bodyLines };
}

async function loadPosts() {
  const list = document.getElementById("post-list");

  try {
    const res = await fetch("posts/creating-my-own-webpage.txt");
    if (!res.ok) {
      list.textContent = "Failed to load post file: " + res.status;
      return;
    }

    const text = await res.text();
    const { title, date, description } = parsePostText(text);

    list.textContent = "";

    const a = document.createElement("a");
    a.className = "preview";
    a.href = "post.html?post=creating-my-own-webpage";

    const titleEl = document.createElement("h2");
    titleEl.textContent = title;
    a.appendChild(titleEl);

    const dateEl = document.createElement("p");
    dateEl.textContent = date;
    a.appendChild(dateEl);

    const descEl = document.createElement("p");
    descEl.textContent = description;
    a.appendChild(descEl);

    list.appendChild(a);
  } catch (err) {
    console.error(err);
    list.textContent = "Error: " + err.message;
  }
}

loadPosts();
