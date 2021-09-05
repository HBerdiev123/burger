import React from "react";
import MainNavigation from "./mainNav";

const Header = () => {
  return (
    <header>
      <div className="fixed-top">
        <div className="navbar-area navbar-dark">
          {/* mobile nav comes here */}
          <div className="main-nav">
            <MainNavigation />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
