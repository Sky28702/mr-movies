function Filter({ click }) {
  return (
    <div className="flex p-4 items-center text-black">
      <select
        defaultValue=""
        className="bg-white rounded-[4px] h-12 outline-none p-1"
        onChange={(e) => click(e.target.value)}
      >
        <option value="" disabled className="hidden">
          Filter By
        </option>
        <option value="popular">Popular</option>
        <option value="top_rated">Top Rated</option>
        <option value="upcoming">Upcoming</option>
      </select>
    </div>
  );
}
export default Filter;
