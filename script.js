const username = "marceybee";
const projectsContainer = document.getElementById("projects");

fetch(`https://api.github.com/users/${username}/repos`)
  .then(response => {
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    return response.json();
  })
  .then(repos => {
    repos.forEach(repo => {
      const projectCard = document.createElement("div");

      projectCard.innerHTML = `
        <h2>${repo.name}</h2>
        <p>${repo.description || "No description provided."}</p>
        <a href="${repo.html_url}" target="_blank">View Repository</a>
      `;

      projectsContainer.appendChild(projectCard);
    });
  })
  .catch(error => {
    console.error("Error fetching repos:", error);
  });