let nuberOfFilms = +prompt("Сколько фильмов вы уже просмотрели?","");

let personalMovieDB = {
    count: nuberOfFilms,
    movies: {},
    actors: {},
    genres:[],
    privat: false,
};


let a = prompt("какой из фильмов вы уже просмотрели?",""),
    b = prompt("на сколько оцените его?","");

    personalMovieDB.movies[a] = b;


    console.log(personalMovieDB);




