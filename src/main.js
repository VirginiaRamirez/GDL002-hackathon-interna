
const MOVIE_API_URL = "https://www.omdbapi.com/";

// FIXME: key no debe estar en el codigo
// investigar cuales son las "best practices"
const KEY = "ad71b8de";

function fillElements (movieList, divElement){
    for(let i=0; i<movieList.length; i++) {
        let divMovie = document.createElement("div");
        divMovie.className = "movie";
        divMovie.innerHTML = "<button><img src='" + movieList[i].Poster + "'></button>" + "<p> </p>"+ 
                            movieList[i].Title;
                      
        // callback function that prints/shows pokemon information
        divMovie.addEventListener("click", ()=>showMovieInfo(movieList[i]));
        divElement.insertAdjacentElement("beforeend", divMovie);
    }
}


function showMovieInfo(movie){
    document.getElementById("welcomeCarrousel").style.display = "none";
    document.getElementById("welcomeScreen").style.display = "none";
    document.getElementById("movieDetailScreen").style.display = "block";
  
    let divMovieInfo = document.getElementById("movieDetailScreen");
    let movieScreen = divMovieInfo.getElementsByTagName("p");
  
     movieScreen[0].innerHTML = "Título: " + movie.Title;
     movieScreen[1].innerHTML = "<img src='" +  movie.Poster + "'>";
     movieScreen[2].innerHTML = "Año: " + movie.Year;
     movieScreen[3].innerHTML = "Genero: " + movie.Genre;
   
}
  
  

let topHorrorMoviesIds =  window.moviesHandler.topHorrorMovieIds;

for (let index = 0; index <  topHorrorMoviesIds.length; index++) {
    const movieId = topHorrorMoviesIds[index];
    let url = new URL(MOVIE_API_URL);

    let urlDataRequest = new URL(`?i=${movieId}&apikey=${KEY}`, url);
    
    fetch(urlDataRequest)
        .then((data) => {
            // convertimos nuestra data a JSON
            return data.json();
        }).then((dataAsJSON) => {
            // cualquier operación con la data ya procesada
            console.log(dataAsJSON);

            fillElements([dataAsJSON], document.getElementById("welcomeCarrousel"));
        }
    );
}