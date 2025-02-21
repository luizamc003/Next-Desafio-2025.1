export default function SearchHeader() {
  return (
    <div className="flex items-center w-full border-b-2 border-primary-pink m-1 lg:w-[260px] xl:w-[280px] px-4 md:px-0">
      <input
        id="search-bar"
        className="w-full text-[16px] placeholder:text-xs pt-0 pb-1 lg:mx-0 lg:px-5 placeholder:text-gray-2000 lg:border-b-0 border-none outline-none"
        type="search"
        placeholder="Busque por produtos..."
      />
      <button className="flex items-center justify-center text font-bold ml-2">
        <span className="material-symbols-outlined text-primary-pink">
          search
        </span>
      </button>
      <link
        href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
        rel="stylesheet"
      />
    </div>
  );
}
