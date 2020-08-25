import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./style.css";

function Navbar() {
  const [search, setSearch] = useState(false);

  const submitSearch = (e) => {
    e.preventDefault();
    alert("Search");
  };

  const openSearch = (e) => {
    setSearch(true);
  };

  const searchClass = search ? "searchInput active" : "searchInput";

  return (
    <div className="navbar">
      <ul className="navbarMenu">
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about-us">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/post">Posts</NavLink>
        </li>
        <li>
          <NavLink to="/contact-us">Contact Us</NavLink>
        </li>
      </ul>
      <div className="search">
        <form onSubmit={submitSearch}>
          <input type="text" className={searchClass} placeholder="Search" />
          <img
            className="searchIcon"
            src={require("../../assets/icons/search.png")}
            alt="Search"
            onClick={openSearch}
          />
        </form>
      </div>
    </div>
  );
}

export default Navbar;
