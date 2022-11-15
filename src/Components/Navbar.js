import React from "react";
import logo1 from "../Images/Home/Navbar/logo1.png";

function Navbar() {
  return (
    <nav>
      <img src={logo1} />
      <div className="nav-buttons">
        <div className="links">

            {/* Come back and redo anchor tags */}
          <a>Home</a>
          <a>Place to stay</a>
          <a>NFTs</a>
          <a>Community</a>
        </div>

        <div>
          <button>Connect Wallet</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
