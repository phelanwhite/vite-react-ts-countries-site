import { useThemeContext } from "@/contexts/theme-context";
import React from "react";
import { FaMoon, FaRegMoon } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  const { theme, toggleTheme } = useThemeContext();
  return (
    <div className="shadow sticky top-0 left-0 right-0 z-10 bg-[--element-color]">
      <div className="max-w-[1440px] mx-auto flex justify-between items-center p-4">
        <Link to={`/`}>
          <h3 className="font-bold text-xl">Where in the world?</h3>
        </Link>
        <button onClick={toggleTheme} className="flex items-center gap-1">
          {theme === "light" && <FaRegMoon />}
          {theme === "dark" && <FaMoon />}
          Dark mode
        </button>
      </div>
    </div>
  );
};

export default Header;
