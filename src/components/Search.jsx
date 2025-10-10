import { IconSearch } from "@tabler/icons-react";
function Search() {
  return (
    <section className="text-black p-4">
      <form className=" flex flex-row justify-between">
        <div className="  border  flex items-center bg-white border-black w-100 rounded-4xl">
          <span className="bg-white rounded-bl-4xl rounded-tl-4xl p-4">
            <IconSearch stroke={2} />
          </span>
          <input
            type="text"
            className="w-full p-2 h-14 rounded-4xl focus:outline-none text-2xl  "
            placeholder="Search.."
          />
        </div>
        <div className=" flex items-center">
          <select className="bg-white rounded-[4px] w-40 h-12 outline-none p-1">
            <option>Sort By</option>
            <option value="A-Z">A-Z</option>
            <option value="Release Date">Release Date</option>
          </select>
        </div>
      </form>
    </section>
  );
}
export default Search;
