import React from "react";

const NavBar = () => {
  return (
    <nav className="row menu">
      <ul className="u-full-width menu__ul">
        <li className="menu__ul-item">
          <a href="a" className="menu__ul-link">
            All
          </a>
        </li>
        <li className="menu__ul-item">
          <a href="v" className="menu__ul-link">
            Active
          </a>
        </li>
        <li className="menu__ul-item">
          <a href="b" className="menu__ul-link">
            Completed
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
