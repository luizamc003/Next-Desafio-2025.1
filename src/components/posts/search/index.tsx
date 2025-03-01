import { SearchRounded } from "@mui/icons-material";

export default function Search() {
  return (
    <div className="w-full flex justify-center items-center p-2 pb-5">
      <div className="w-[60%] border-2 rounded-3xl overflow-hidden h-9 flex justify-center items-center border-primary-pink bg-slate-50 pr-3">
        <input
          type="text"
          className="w-full px-3 border-none outline-none bg-slate-50"
        />

        <button>
          <SearchRounded className="text-primary-pink" />
        </button>
      </div>
    </div>
  );
}
