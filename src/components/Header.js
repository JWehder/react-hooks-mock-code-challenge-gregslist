import React from "react";
import Search from "./Search";

function Header({ onSearchListing, listings }) {
  return (
    <header>
      <h1>
        <span className="logo" role="img">
          ☮
        </span>
        gregslist
      </h1>
      <Search onSearchListing= {onSearchListing} listings= {listings} />
    </header>
  );
}

export default Header;
