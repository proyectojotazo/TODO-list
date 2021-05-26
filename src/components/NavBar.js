import React from "react";

const NavBar = ({ setPage, page }) => {
  const handleClick = (e) => {
    e.preventDefault();
    setPage(e.target.text);
  };

  return (
    <nav className="row menu">
      <ul className="u-full-width menu__ul">
        <li
          className={page === "All" ? "menu__ul-itemSelected" : "menu__ul-item"}
        >
          <a href="All" onClick={handleClick} className="menu__ul-link">
            All
          </a>
        </li>
        <li
          className={
            page === "Active" ? "menu__ul-itemSelected" : "menu__ul-item"
          }
        >
          <a href="Active" onClick={handleClick} className="menu__ul-link">
            Active
          </a>
        </li>
        <li
          className={
            page === "Completed" ? "menu__ul-itemSelected" : "menu__ul-item"
          }
        >
          <a href="Completed" onClick={handleClick} className="menu__ul-link">
            Completed
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
