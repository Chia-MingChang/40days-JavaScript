async function searchMovies() {
  const query = document.getElementById("searchInput").value.trim();
  const resultsDiv = document.getElementById("results");
  resultsDiv.innerHTML = ""; // Clear previous results

  if (!query) {
    resultsDiv.textContent = "Please enter a movie name.";
    return;
  }

  try {
    const response = await fetch(`http://www.omdbapi.com/?apikey=yourkey&s=${encodeURIComponent(query)}`);//change 'yourkey' with the api key
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (data.Response === "False") {
      resultsDiv.textContent = "No results found.";
      return;
    }

    // Display movies
    data.Search.forEach(movie => {
      const movieDiv = document.createElement("div");
      movieDiv.className = "movie";

      movieDiv.innerHTML = `
        <img src="${movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/200x300?text=No+Image"}" alt="${movie.Title}">
        <h3>${movie.Title}</h3>
        <p>${movie.Year}</p>
      `;

      resultsDiv.appendChild(movieDiv);
    });

  } catch (error) {
    console.error("Error fetching movies:", error);
    resultsDiv.textContent = "Something went wrong. Please try again later.";
  }
}
