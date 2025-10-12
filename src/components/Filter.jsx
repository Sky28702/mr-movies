function Filter() {
  return (
    <div className="flex p-4 items-center text-black">
      <select
        defaultValue=""
        className="bg-white rounded-[4px] h-12 outline-none p-1"
      >
        <option value="" disabled className="hidden">
          Filter By
        </option>
        <option value="Popular">Popular</option>
        <option value="Top Rated">Top Rated</option>
        <option value="Upcoming">Upcoming</option>
      </select>
    </div>
  );
}
export default Filter;
