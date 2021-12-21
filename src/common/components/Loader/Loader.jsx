import React from "react";
import classNames from "classnames";
import "./loader.css";

export default ({ className }) => {
  return (
    <div className={classNames("loader", className || "")}>
      <div className="loader_base"></div>
    </div>
  );
};
