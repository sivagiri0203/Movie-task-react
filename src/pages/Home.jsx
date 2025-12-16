import { useEffect, useState } from "react";
import { searchMovies } from "../App";

import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import Pagination from "../components/Pagination";
import FilterDropdown from "../components/FilterDropdown";

export default function Home() {
  const [query, setQuery] = useState("avengers");
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [type, setType] = useState("");
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchMovies = async () => {
      const data = await searchMovies(query, page, type);
      if (data.Response === "True") {
        setMovies(data.Search);
        setTotal(Number(data.totalResults));
        setError("");
      } else {
        setMovies([]);
        setError(data.Error);
      }
    };
    fetchMovies();
  }, [query, page, type]);

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="bg-white p-6 rounded-xl shadow mb-6 flex flex-col md:flex-row gap-4">
        <SearchBar onSearch={setQuery} />
        <FilterDropdown onChange={setType} />
      </div>

      {error && <p className="text-center text-red-600">{error}</p>}
      {!error && movies.length === 0 && (
        <p className="text-center text-gray-500">No movies found</p>
      )}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
        {movies.map((movie) => (
          <MovieCard key={movie.imdbID} movie={movie} />
        ))}
      </div>

      {total > 10 && (
        <Pagination page={page} total={total} setPage={setPage} />
      )}
    </div>
  );
}
