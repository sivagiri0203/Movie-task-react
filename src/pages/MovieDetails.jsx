import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getMovieDetails } from "../App";


export default function MovieDetails() {
const { id } = useParams();
const [movie, setMovie] = useState(null);


useEffect(() => {
getMovieDetails(id).then(setMovie);
}, [id]);


if (!movie) return <p className="p-6">Loading...</p>;


return (
<div className="p-6 max-w-5xl mx-auto">
<div className="bg-white rounded-xl shadow p-6 flex flex-col md:flex-row gap-8">
<img src={movie.Poster} className="w-72 rounded-lg" />
<div>
<h1 className="text-3xl font-bold mb-4">{movie.Title}</h1>
<p className="text-gray-700 mb-4">{movie.Plot}</p>
<p><strong>Year:</strong> {movie.Year}</p>
<p><strong>Genre:</strong> {movie.Genre}</p>
<p><strong>Cast:</strong> {movie.Actors}</p>
<p><strong>IMDB:</strong> ⭐ {movie.imdbRating}</p>
</div>
</div>
</div>
);
}