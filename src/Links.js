import React from "react";
import "./App.css";

function Links({ path, logo, alt }) {
  return (
    <>
      <a href={path}>
        <div className="link__container">
          <img className="link__logo" src={logo} alt={alt} />
          <div className="link__name">{alt}</div>
        </div>
      </a>
    </>
  );
}

export default Links;
