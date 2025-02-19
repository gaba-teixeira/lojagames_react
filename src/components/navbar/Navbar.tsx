import { MagnifyingGlass, ShoppingCart, User } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="flex justify-center  w-full p-2 text-white bg-slate-800">
      <div className="container flex justify-between text-lg">
        <Link to="/home" className="w-[248px] h-[59px]  top-[35px] left-[43px]">
          <img
            src="https://ik.imagekit.io/vzr6ryejm/games/logolg.png?updatedAt=1714775486354"
            alt="logo da loja de games"
          />
        </Link>
        <div>
          <form>
            <input
              type="text"
              name="pesquisa"
              id="pesquisa"
              className="bg-white w-[380px] rounded-lg mt-4 text-black"
            ></input>
            <button 
            className="m-2 bg-teal-500 p-2 rounded-lg cursor-pointer   ">
              <MagnifyingGlass size={15} color="#fafafa" />
            </button>
          </form>
        </div>
        <div className="flex gap-4 mt-[14px] text-lg">
          Produtos
          <Link to="/temas" className="hover:underline">
            Categorias
          </Link>
          <Link to="/cadastrartema" className="hover:underline">
            Cadastrar categorias
          </Link>
          <Link to="">
            <User size={30} color="#fafafa" />
          </Link>
          <Link to="">
            <ShoppingCart size={30} color="#fafafa" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
