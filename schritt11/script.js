import { supa } from "./supabase.js";

//Retrieve all movies: Get all columns of all movies from the `movies` table.
async function selectAllMovies() {
    const { data, error } = await supa.from("movies").select();
  
    return data;
  }

console.log('All Movies in DB: ', selectAllMovies());

let filme=await selectAllMovies();

function showMovies(filme) {
  const filmeContainer = document.getElementById('filme');

  filme.forEach(film => {
      // Create a new div element for each film
      const filmDiv = document.createElement('div');
      filmDiv.classList.add('film'); // Fügen Sie eine Klasse hinzu, um das Styling zu erleichtern

      // Create a new <h2> element for the title
      const title = document.createElement('h2');
      title.textContent = film.title;
      filmDiv.appendChild(title);

      // Create a new <p> element for the genre
      const genre = document.createElement('p');
      genre.textContent = "Genre: " +film.genre;
      filmDiv.appendChild(genre);

      // Create a new <p> element for the release date
      const releaseDate = document.createElement('p');
      releaseDate.textContent = "Release Date: "+film.release_date;
      filmDiv.appendChild(releaseDate);

      // Create a new <p> element for the rating
      const rating = document.createElement('p');
      rating.textContent = "Rating: "+film.rating;
      filmDiv.appendChild(rating);

      // Add the new div element to the filmeContainer
      filmeContainer.appendChild(filmDiv);
  });
}

// Aufruf der Funktion mit Ihren Filmdaten
showMovies(filme);

