"use strict";

let nuberOfFilms;

function start() {
  nuberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?");

  while (nuberOfFilms == "" || nuberOfFilms == null || isNaN(nuberOfFilms)) {
    nuberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?");
  }
}
start();

const personalMovieDB = {
  count: nuberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
};

function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    const a = prompt("какой из фильмов вы уже просмотрели?", ""),
      b = prompt("на сколько оцените его?", "");
    if (a !== null && b !== null && a !== "" && b !== "" && a.length < 50) {
      personalMovieDB.movies[a] = b;
      console.log("done");
    } else {
      console.log("Error");
      i--;
    }
  }
}
// rememberMyFilms();

function detectPersonalLevel() {
  let count = personalMovieDB.count;
  if (count >= 1 && count <= 10) {
    console.log("Просмотрено мало фильмов");
  } else if (count >= 11 && count <= 30) {
    console.log("Вы классический зритель");
  } else if (count >= 31) {
    console.log("Вы киноман");
  } else {
    console.log("Error");
  }
}
// detectPersonalLevel();

function showMyDB(hidden) {
  if (!hidden) {
    console.log(personalMovieDB);
  }
}
showMyDB(personalMovieDB.privat);

function writeYourGenres() {
  for (let i = 1; i <= 3; i++) {
    const genre = prompt(`Ваш любимый жанр под номером ${i}`);
    personalMovieDB.genres[i - 1] = genre;
  }
}
writeYourGenres();
