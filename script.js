const movies = {
"infinity-war": {
title: "Avengers: Infinity War",
image: "img/avengers-infinity-war.jpg",
info: "2018 • Action • Adventure • Sci-Fi • 2h 29m • ★ 8.4",
description: "The Avengers and their allies face Thanos, a powerful enemy searching for the Infinity Stones. The heroes must come together to stop him before he can use their power to change the fate of the universe."
},


"dark-knight": {
    title: "The Dark Knight",
    image: "img/batman.jpg",
    info: "2008 • Action • Crime • Drama • 2h 32m • ★ 9.0",
    description: "Batman faces the Joker, a criminal whose actions push Gotham City into chaos. Batman, Jim Gordon and Harvey Dent work together to protect Gotham."
},

"godfather": {
    title: "The Godfather",
    image: "img/the-godfather.jpg",
    info: "1972 • Crime • Drama • 2h 55m • ★ 9.2",
    description: "The story follows the Corleone family and its powerful position in organized crime. Michael Corleone gradually becomes more involved with his family's business."
},

"madagascar": {
    title: "Madagascar",
    image: "img/madagascar.jpg",
    info: "2005 • Animation • Comedy • Family • 1h 26m • ★ 6.9",
    description: "A group of animals from the Central Park Zoo unexpectedly find themselves in the wild after being sent away from New York City. They must adapt to a completely new environment."
},

"fallout": {
    title: "Mission: Impossible — Fallout",
    image: "img/mission-impossible-fallout.jpg",
    info: "2018 • Action • Adventure • Thriller • 2h 27m • ★ 7.7",
    description: "Ethan Hunt and his team face the consequences of a mission that goes wrong. They race against time while trying to prevent a dangerous global threat."
},

"mentalist": {
    title: "The Mentalist",
    image: "img/the-mentalist.jpg",
    info: "2008 • Crime • Drama • Mystery • 7 Seasons • ★ 8.2",
    description: "Patrick Jane works as a consultant for the California Bureau of Investigation. He uses his observation and psychological skills to help solve difficult crimes."
},

"smallville": {
    title: "Smallville",
    image: "img/smallville.jpg",
    info: "2001 • Action • Drama • Sci-Fi • 10 Seasons • ★ 8.2",
    description: "The series follows a young Clark Kent as he grows up in Smallville and discovers more about his abilities, his origins and his future."
},

"breaking-bad": {
    title: "Breaking Bad",
    image: "img/breaking-bad.jpg",
    info: "2008 • Crime • Drama • Thriller • 5 Seasons • ★ 9.5",
    description: "Walter White, a chemistry teacher, enters the criminal world after making a drastic decision about his future. His choices gradually transform his life and relationships."
},

"regular-show": {
    title: "Regular Show",
    image: "img/regular-show.jpg",
    info: "2009 • Animation • Comedy • 8 Seasons • ★ 8.6",
    description: "Mordecai and Rigby work at a park and try to get through their everyday jobs. Their ordinary days often turn into strange and unexpected adventures."
},

"loki": {
    title: "Loki",
    image: "img/loki.jpg",
    info: "2021 • Action • Adventure • Fantasy • 2 Seasons • ★ 8.2",
    description: "After escaping with the Tesseract, Loki becomes involved with the Time Variance Authority, an organization responsible for protecting the timeline."
}


};

function openDetails(movieId) {
const movie = movies[movieId];


if (!movie) {
    console.error("Movie not found:", movieId);
    return;
}

document.getElementById("modalImage").src = movie.image;
document.getElementById("modalImage").alt = movie.title;

document.getElementById("modalTitle").textContent = movie.title;
document.getElementById("modalInfo").textContent = movie.info;
document.getElementById("modalDescription").textContent = movie.description;

document.getElementById("detailsModal").style.display = "flex";


}

function closeDetails() {
document.getElementById("detailsModal").style.display = "none";
}

document.getElementById("detailsModal").addEventListener("click", function(event) {
if (event.target === this) {
closeDetails();
}
});

document.addEventListener("keydown", function(event) {
if (event.key === "Escape") {
closeDetails();
}
});
