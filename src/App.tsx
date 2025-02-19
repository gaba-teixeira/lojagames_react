

import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import ListarCategoria from "./components/categoria/listarcategoria/ListarCategoria";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
       
          <Route path="/" element={<Home />} />
          <Route path="/categorias" element={<ListarCategoria />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
