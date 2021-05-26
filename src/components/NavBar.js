import React from "react";

const NavBar = ({ setPage }) => {
  const handleClick = (e) => {
    e.preventDefault();
    setPage(e.target.text);
  };

  return (
    <nav className="row menu">
      <ul className="u-full-width menu__ul">
        <li className="menu__ul-item">
          <a href="a" onClick={handleClick} className="menu__ul-link">
            All
          </a>
        </li>
        <li className="menu__ul-item">
          <a href="v" onClick={handleClick} className="menu__ul-link">
            Active
          </a>
        </li>
        <li className="menu__ul-item">
          <a href="b" onClick={handleClick} className="menu__ul-link">
            Completed
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
