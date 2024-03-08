import { supa } from "./supabase.js";

console.log("00 JavaScript verbunden")

// 1. **Alle Filme abrufen**: Hole alle Spalten aller Filme aus der Tabelle `movies`.

async function selectAllMovies() {
  const { data, error } = await supa.from("movies").select();
  return data;
}

console.log('Alle Filme in der DB: ', selectAllMovies());

let filme = await selectAllMovies();

function showMovies(filme) {
  const filmeContainer = document.getElementById('filme');

  filme.forEach(film => {
    //Usage of innerHTML and template literals for shorter code
    filmeContainer.innerHTML += `
      <div class="film">
        <h2>${film.title}</h2>
        <p>Genre: ${film.genre}</p>
        <p>Release Date: ${film.release_date}</p>
        <p>Rating: ${film.rating}</p>
      </div>
    `;
  });
}

showMovies(filme);
