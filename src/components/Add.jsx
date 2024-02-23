import { useContext, useEffect, useState } from "react";
import { items } from "../assets/dataFood";
import { arrContext } from "../Contexts/MenuContext";
import { json, useNavigate, useParams } from "react-router-dom";
const Add = () => {
  let nav = useNavigate();
  let { id } = useParams();
  let { menu, setMenu } = useContext(arrContext);
  let product = menu.find((item) => item.id == id);
  const [currentURL, setCurrentURL] = useState("");
  let [titleOfPage, setTitleOfPage] = useState("");
  useEffect(() => {
    setCurrentURL(window.location.href);
    setTitleOfPage("Edit Product");
  }, []);
  //   get all categories
  let categories = [...new Set(items.map((cat) => cat.cat))];
  let [formPro, setFormPro] = useState({
    img: "",
    title: "",
    desc: "",
    cat: "",
  });
  // submit Btn
  function handleSubmit(e) {
    e.preventDefault();
    if (!currentURL.includes("edit")) {
      let newItem = {
        id: menu.length + 1,
        title: formPro.title,
        desc: formPro.desc,
        cat: formPro.cat,
        img: URL.createObjectURL(formPro.img),
      };
      // if i choose menu not menu from context while filter this new product not be with them
      items.push(newItem);
      localStorage.setItem("items", JSON.stringify(items));
    } else {
      let newItem = menu.map((item) => {
        if (item.id == product.id) {
          return {
            ...item,
            img: URL.createObjectURL(formPro.img),
            title: formPro.title,
            desc: formPro.desc,
            cat: formPro.cat,
          };
        } else {
          return item;
        }
      });
      setMenu(newItem);
      localStorage.setItem("items", JSON.stringify(newItem));
    }

    nav("/");
  }

  return (
    <div className="container my-[80px]">
      <h2 className="font-bold text-4xl mb-4">
        {currentURL.includes("edit") ? titleOfPage : "Add New Product"}
      </h2>
      <form onSubmit={handleSubmit}>
        <div className="flex  flex-col gap-2 mb-4">
          <label className="text-orange-500   capitalize font-bold ">
            add image
          </label>
          <input
            accept="image/*"
            onChange={(e) => setFormPro({ ...formPro, img: e.target.files[0] })}
            className="w-[100%]"
            type="file"
          />
        </div>
        <div className="flex  flex-col gap-2 mb-4">
          <label className="text-orange-500  capitalize font-bold ">
            Title
          </label>
          <input
            value={formPro.title}
            onChange={(e) => setFormPro({ ...formPro, title: e.target.value })}
            className="w-[100%] border-2 outline-none h-10 pl-5 rounded "
            type="text"
          />
        </div>
        <div className="flex  flex-col gap-2 mb-4">
          <label className="text-orange-500  capitalize font-bold ">
            Description
          </label>
          <input
            value={formPro.desc}
            onChange={(e) => setFormPro({ ...formPro, desc: e.target.value })}
            className="w-[100%] border-2 outline-none h-10 pl-5 rounded "
            type="text"
          />
        </div>
        <div className="flex  flex-col gap-2 mb-4">
          <label className="text-orange-500  capitalize font-bold ">
            Categories
          </label>
          <select
            value={formPro.cat}
            onChange={(e) => setFormPro({ ...formPro, cat: e.target.value })}
            className="w-[100%] border-2 outline-none h-10 pl-5 rounded ">
            {categories.map((item) => {
              return (
                <>
                  <option className="hidden">Select</option>
                  <option>{item}</option>
                </>
              );
            })}
          </select>
        </div>
        <button className="bg-green-500 mx-auto w-fit px-6 py-2 mt-10 rounded text-white block">
          {currentURL.includes("edit") ? "Edit" : "Add "}
        </button>
      </form>
    </div>
  );
};

export default Add;
