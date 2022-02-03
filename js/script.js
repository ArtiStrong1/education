"use strict";
let numberOfFilms = prompt("Сколько фильмов вы посмотрели ?","");
let personalMovieDB = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    private: false,
};
const a = prompt("Последний фильм ?",""),
      b = prompt("На сколько оцените ?",""),
      c = prompt("Последний фильм ?",""),
      d = prompt("На сколько оцените ?","");
      personalMovieDB.movies[a] = b; 
      personalMovieDB.movies[c] = d;
      console.log(personalMovieDB);