import { useState } from "react";
import CartWidget from "./CartWidget";
import logo from "../assets/uvas.png";

const Navbar = () => {
    const [showCategories, setShowCategories] = useState(false);


  return (
    <nav className="bg-red-700 py-4">
      <div className="container text-white mx-auto flex justify-between items-center">
      <a href="http://localhost:5173/"><h1 className="text-xl font-bold italic">Vino a vinos</h1></a>
        <div className="mr-20">
          <img src={logo} alt="Uvas logo" className="w-12 h-12" />
        </div>
        <div className="ml-20 flex items-center justify-end">
            <ul className="flex space-x-4">
                <li>
                <button className="text-white text-xl" href="" onClick={()=> setShowCategories(!showCategories)}>Categorías</button>
                {showCategories && (
                <ul className="absolute bg-red-600 text-xm w-[10%]">
                    <li><button className="hover:underline">Vino tinto</button></li>
                    <li><button className="hover:underline">Vino rosado</button></li>
                    <li><button className="hover:underline">Vino blaco</button></li>
                </ul>)}
                </li>
                <li><button className="text-xl">Contacto</button></li>
                <li><button className="text-xl">Ubicación</button></li>
            </ul>
        </div>
        <div className="flex items-center justify-center flex-grow">
          <form className="bg-white p-2 h-[-20%] rounded-lg w-full self-center">
            <input type="text" className="text-black italic w-100%"/>
          </form>
        </div>
        <div>
          <CartWidget /></div>
      </div>
    </nav>
  );
};

export default Navbar;
