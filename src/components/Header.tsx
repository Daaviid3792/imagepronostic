
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="bg-[#111] py-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="flex items-center">
          <h1 
            className="text-white text-xl md:text-2xl font-bold cursor-pointer" 
            onClick={() => navigate("/")}
          >
            Image Arena Creator
          </h1>
        </div>
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            <li>
              <a href="/" className="text-gray-300 hover:text-white transition-colors">
                Inicio
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Galería
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                Ayuda
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
