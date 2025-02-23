import { Search } from "@mui/icons-material";

export default function SearchHeader() {
  return (
    <div className="flex items-center justify border-b-2 w-[350px] border-primary-pink m-1 lg:w-[500px]px-4 md:px-0">
      <input
        id="search-bar"
        className="w-full text-[20px] placeholder:text-xs pt-0 pb-1 lg:mx-0 lg:px-5 placeholder:text-gray-2000 lg:border-b-0 border-none outline-none"
        type="search"
        placeholder="Busque por produtos..."
      />
      <button className="flex items-center justify-center text font-bold ml-2 text-primary-pink">
        <Search />
      </button>
    </div>
  );
}
