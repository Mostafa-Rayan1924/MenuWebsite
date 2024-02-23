import { createContext, useState } from "react";
import { items } from "../assets/dataFood";
export let arrContext = createContext([]);

const FoodsContextProvider = ({ children }) => {
  let [menu, setMenu] = useState(items);
  return (
    <>
      <arrContext.Provider value={{ menu, setMenu }}>
        {children}
      </arrContext.Provider>
    </>
  );
};

export default FoodsContextProvider;
