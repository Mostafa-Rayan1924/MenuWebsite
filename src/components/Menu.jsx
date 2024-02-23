import { useContext, useEffect } from "react";
import ItemBox from "./ItemBox";
import { arrContext } from "../Contexts/MenuContext";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom";

const Menu = () => {
  let { menu, setMenu } = useContext(arrContext);
  //   deleteFunction
  let delFunc = (id) => {
    let newArrAfterDel = menu.filter((item) => item.id !== id);
    setMenu(newArrAfterDel);
    localStorage.setItem("items", JSON.stringify(newArrAfterDel));
  };
  //   get all items in dataFood
  let itemsMap = menu.map((item) => {
    return <ItemBox key={item.id} item={item} delFunc={delFunc} />;
  });
  useEffect(() => {
    if (localStorage.length !== null) {
      let getItems = JSON.parse(localStorage.getItem("items"));
      setMenu(getItems);
    }
  }, []);
  return (
    <div className="container">
      <Link
        to={"/add"}
        className="flex w-fit items-center gap-1 bg-bgGradient px-2 py-1 rounded text-white">
        Add new product <IoIosAddCircleOutline />
      </Link>

      <div className=" grid lg:grid-cols-3 gap-4 md:grid-cols-2 grid-cols-1 mt-10 mb-20">
        {menu.length >= 1 ? (
          itemsMap
        ) : (
          <h2 className="text-center">NO ITEMS FOUND...</h2>
        )}
      </div>
    </div>
  );
};

export default Menu;
