import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div>
      <Link to="/mainpage">Main Page</Link>
      <Link to="/createblog">Create Blog</Link>
    </div>
  );
};

export default Navbar;
