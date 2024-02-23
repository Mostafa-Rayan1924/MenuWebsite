import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { Link } from "react-router-dom";

const ItemBox = ({ item, delFunc }) => {
  function handleDel() {
    let confirmMsg = confirm(`Are You Sure To delete : ${item.title}`);
    if (confirmMsg) {
      delFunc(item.id);
    }
  }
  return (
    <div className="shadow p-4 rounded-lg relative overflow-hidden border-[3px] border-transparent transition-all duration-300 hover:border-orange-500">
      <img className="w-[150px] mt-2 mx-auto" src={item.img} alt="" />
      <h2 className="text-orange-500 font-bold uppercase ">{item.title}</h2>
      <h3 className="absolute top-0 right-0 bg-bgGradient px-5 rounded-bl-lg  py-2 text-white">
        {item.cat}
      </h3>
      <p className="text-gray-500 mt-2">{item.desc}</p>
      <div className="flex items-center gap-2 absolute top-4 left-2">
        <Link to={`/edit/${item.id}`}>
          <FaEdit className="text-2xl text-sky-600 cursor-pointer" />
        </Link>
        <MdDelete
          onClick={handleDel}
          className="text-2xl text-red-600 cursor-pointer"
        />
      </div>
    </div>
  );
};

export default ItemBox;
