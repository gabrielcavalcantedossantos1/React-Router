import { Route, Routes } from "react-router-dom";

import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Products } from "./pages/Products";
import { Product } from "./pages/Product";
import { MainLayout } from "./components/MainLayout";

export default function App() {
  return (
    <div>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />

          <Route path="/products">
            <Route index element={<Product />} />
            <Route path=":id" element={<Products />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}
