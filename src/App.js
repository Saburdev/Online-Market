import { Route, Routes } from "react-router-dom";
import { Navbar } from "./Components/Navbar";
import { AddProduct } from "./Pages/AddProduct";


function App() {
  return (
    <div className=" flex h-screen w-full  ml-2.5 mt-2.5">
      <Navbar />
      <Routes>
        <Route index element={<App />} />
        <Route path={'/AddProduct'} element={<AddProduct />} />
        <Route path={'/AddProduct'} element={<ProductList />} />
        <Route path={'/AddProduct'} element={<CounterProducts />} />
      </Routes>
    </div>
  );
}

export default App;
