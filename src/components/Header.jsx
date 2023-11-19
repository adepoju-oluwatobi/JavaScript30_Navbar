import React, { useState } from "react";
import Logo from "../assets/Logo.svg";
import Menu from "../assets/Menu.svg";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(prevState => !prevState);
  };

  return (
    <header style={{ position: "relative" }}>
      <div className="flex justify-between items-center p-4">
        <div>
          <img src={Logo} alt="" />
        </div>
        <div onClick={toggleMenu}>
          <img src={Menu} alt="" />
        </div>
      </div>
      <nav
        className={`p-4 rounded-lg absolute ${
          isMenuOpen ? "flex" : "hidden"
        } flex-col justify-center items-center gap-6 bg-white w-[80%] left-1/2 top-[250%] transform-translate-50%-50%`}
        style={{
          transform: isMenuOpen ? "translate(-50%, -50%)" : "translate(-50%, -200%)",
        }}
      >
        <p>Products</p>
        <p>Challenges</p>
        <p>Resources</p>
        <p>Other Links</p>
      </nav>
    </header>
  );
}

export default Header;
