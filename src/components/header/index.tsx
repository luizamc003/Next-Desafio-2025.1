import SearchHeader from "./search-header";
import Topbar from "./topbar";

export default function Header() {
  return (
    <div>
      <Topbar />
      <div>
        <SearchHeader />
      </div>
    </div>
  );
}
