import { useEffect, useState } from "react";
import MovieList from "./MovieList";


function MoviePage() {

    const [movies, setMovies] = useState([]);



    useEffect(() => {
        fetch("http://localhost:3000/movies")
            .then((response) => response.json())
            .then((data) => setMovies(data))
            .catch((error) => { console.log(error) })
    }, []);

    return (
        <main>
            <MovieList movies={movies}/>
        </main>
    )
}

export default MoviePage;