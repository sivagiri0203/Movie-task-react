import { useState } from "react";


export default function SearchBar({ onSearch }) {
const [value, setValue] = useState("");


const submit = (e) => {
e.preventDefault();
if (value.trim()) onSearch(value);
};


return (
<form onSubmit={submit} className="flex w-full">
<input
className="flex-1 px-4 py-3 border rounded-l-lg focus:ring-2 focus:ring-indigo-500"
placeholder="Search movies..."
value={value}
onChange={(e) => setValue(e.target.value)}
/>
<button className="bg-indigo-600 text-white px-6 rounded-r-lg hover:bg-indigo-700">Search</button>
</form>
);
}