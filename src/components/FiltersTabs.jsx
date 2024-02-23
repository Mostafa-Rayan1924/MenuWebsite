import { useContext, useState } from "react";
import { arrContext } from "../Contexts/MenuContext";
import { items } from "../assets/dataFood";
const FiltersTabs = () => {
  let { menu, setMenu } = useContext(arrContext);
  let [active, setActive] = useState("All");
  //   get all categories
  let categories = ["All", ...new Set(items.map((cat) => cat.cat))];
  // filter by tabs
  function filterTabs(cat) {
    setActive(cat);
    if (cat === "All") {
      setMenu(items);
    } else {
      let filterMenu = items.filter((item) => item.cat === cat);
      setMenu(filterMenu);
    }
  }

  return (
    <div className="my-10  flex items-center flex-wrap justify-center gap-3">
      {categories.map((item) => {
        return (
          <button
            onClick={() => {
              filterTabs(item);
            }}
            key={item}
            className={`border ${
              active == item ? "bg-bgGradient text-white" : ""
            } rounded px-4 py-1 transition-all duration-300 hover:text-white hover:bg-bgGradient`}>
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default FiltersTabs;
