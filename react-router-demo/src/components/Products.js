import React from "react";
import { NavLink, Outlet } from "react-router-dom";

function Products() {
  return (
    <>
      <div>Products List</div>
      <input type="search" />
      <nav>
        <NavLink to="featured">Featured</NavLink>
        <NavLink to="new">New</NavLink>
      </nav>
      <Outlet />
    </>
  );
}

export default Products;
