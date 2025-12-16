import { Link } from "react-router-dom";


export default function MovieCard({ movie }) {
return (
<Link to={`/movie/${movie.imdbID}`}>
<div className="bg-white rounded-xl shadow hover:shadow-xl transform hover:-translate-y-1 transition">
<img src={movie.Poster} className="h-64 w-full object-cover rounded-t-xl" />
<div className="p-4">
<h3 className="font-semibold line-clamp-2">{movie.Title}</h3>
<p className="text-sm text-gray-500">{movie.Year}</p>
</div>
</div>
</Link>
);
}