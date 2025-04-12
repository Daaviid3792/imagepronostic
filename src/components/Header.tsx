
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
            Imágenes de pronósticos
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
