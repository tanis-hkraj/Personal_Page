import React from "react";

import "./Feature.css";
import { Link } from "react-router-dom";

const Feature = ({ iconLabel }) => {
  return (
    <div className="feature">
      <div className="feature__circle">
      <i class="fa-solid fa-wrench"></i>
      </div>
      <span className="feature__label"><Link to={iconLabel}>To Website</Link></span>
    </div>
  );
};

export default Feature;