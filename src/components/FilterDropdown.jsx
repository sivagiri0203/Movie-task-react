export default function FilterDropdown({ onChange }) {
return (
<select
className="border px-4 py-3 rounded-lg"
onChange={(e) => onChange(e.target.value)}
>
<option value="">All</option>
<option value="movie">Movie</option>
<option value="series">Series</option>
<option value="episode">Episode</option>
</select>
);
}