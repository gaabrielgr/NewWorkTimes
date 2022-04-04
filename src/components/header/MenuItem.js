import React from "react";
import { Link } from "react-router-dom";

const MenuItem = () => {
  return (
    <>
      <li>
        <Link to="/technology">Technology</Link>
      </li>
      <li>
        <Link to="/science">Science</Link>
      </li>
      <li>
        <Link to="/health">Health</Link>
      </li>
      <li>
        <Link to="/politics">Politics</Link>
      </li>
      <li>
        <Link to="/world">World</Link>
      </li>
    </>
  );
};

export default MenuItem;
