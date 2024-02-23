import { useContext, useState } from "react";
import { arrContext } from "../Contexts/MenuContext";
import { items } from "../assets/dataFood";
import { Link } from "react-router-dom";
const Nav = () => {
  let [search, SetSearch] = useState("");
  let { setMenu } = useContext(arrContext);
  function handleSearch(word) {
    if (word !== "") {
      let FilterByTitle = items.filter((item) =>
        item.title.toLowerCase().includes(word.toLowerCase())
      );
      setMenu(FilterByTitle);
    }
  }
  function handleSearchByClick() {
    handleSearch(search);
    SetSearch("");
  }
  return (
    <header className="shadow-lg  py-4 ">
      <div className="container flex items-center sm:justify-between flex-wrap gap-4 justify-center  ">
        {/* logo */}
        <div>
          <Link to={"/"}>
            <h1 className="text-orange-500 font-bold text-4xl">
              Buffalo Burger
            </h1>
          </Link>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          <input
            value={search}
            onChange={(e) => SetSearch(e.target.value)}
            type="text"
            placeholder="search..."
            className="h-[35px] rounded outline-none pl-2 border border-[#ccc] mr-2"
          />
          <button
            onClick={handleSearchByClick}
            className="bg-bgGradient h-[35px] px-6 rounded text-white capitalize">
            search
          </button>
        </div>
      </div>
    </header>
  );
};

export default Nav;
