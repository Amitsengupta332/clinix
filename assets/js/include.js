async function loadIncludes() {
  const includeElements = document.querySelectorAll("[data-include]");

  for (const element of includeElements) {
    const file = element.getAttribute("data-include");

    try {
      const response = await fetch(file);

      if (!response.ok) {
        element.innerHTML = `<p style="color:red;">Could not load ${file}</p>`;
        continue;
      }

      const content = await response.text();
      element.innerHTML = content;
    } catch (error) {
      element.innerHTML = `<p style="color:red;">Error loading ${file}</p>`;
    }
  }
}

loadIncludes();