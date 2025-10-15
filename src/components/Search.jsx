import { IconSearch } from "@tabler/icons-react";
function Search({ click }) {
  return (
    <section className="text-black   mb-4">
      <form>
        <div className="  border  flex items-center bg-white border-black rounded-4xl">
          <span className="bg-white rounded-bl-4xl rounded-tl-4xl p-4">
            <IconSearch stroke={2} />
          </span>
          <input
            onChange={(e) => click(e.target.value)}
            type="text"
            className=" md:w-full w-50 p-2 h-14 rounded-4xl focus:outline-none text-2xl  "
            placeholder="Search.."
          />
        </div>
      </form>
    </section>
  );
}
export default Search;
