export default function Pagination({ page, total, setPage }) {
const totalPages = Math.ceil(total / 10);


return (
<div className="flex justify-center gap-4 mt-8">
<button
disabled={page === 1}
onClick={() => setPage(page - 1)}
className="px-4 py-2 border rounded disabled:opacity-50"
>Prev</button>
<span className="font-medium">Page {page} of {totalPages}</span>
<button
disabled={page === totalPages}
onClick={() => setPage(page + 1)}
className="px-4 py-2 border rounded disabled:opacity-50"
>Next</button>
</div>
);
}