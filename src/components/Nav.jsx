import React from "react";
import { Link } from "react-router-dom";
function Nav() {
  return (
    <nav style={{ display: 'flex', width: '100%'}}>
      <Link to="/">Home</Link>
    </nav>
  );
}
export default Nav;
