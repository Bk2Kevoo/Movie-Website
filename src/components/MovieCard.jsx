


function MovieCard({movie}) {

const {id, title, genre, rating, releaseYear, description } = movie
    return (
        <li className="card">
            <h3>{title}</h3>
            <p>Rating: {rating}</p>
            <p className="Genre">{genre}</p>
            <p className="Release">{releaseYear}</p>
            <p className="description">{description}</p>
        </li>
    )
}

export default MovieCard;