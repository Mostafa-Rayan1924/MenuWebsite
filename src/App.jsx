import { Route, Routes } from "react-router-dom";
import FiltersTabs from "./components/FiltersTabs";
import Footer from "./components/Footer";
import Head from "./components/Head";
import Menu from "./components/Menu";
import Nav from "./components/Nav";
import FoodsContextProvider from "./Contexts/MenuContext";
import Add from "./components/Add";
export default function App() {
  return (
    <>
      <FoodsContextProvider>
        <Nav />
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Head />
                <FiltersTabs />
                <Menu />
              </>
            }
          />
          <Route path="/add" element={<Add />} />
          <Route path="/edit/:id" element={<Add />} />
        </Routes>
        <Footer />
      </FoodsContextProvider>
    </>
  );
}
