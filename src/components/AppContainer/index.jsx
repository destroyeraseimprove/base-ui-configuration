import React, { useState, useRef, useEffect } from "react";
import { createUseStyles } from "react-jss";
import styles from "./styles";
import TestComponent1 from "components/TestComponent1";

export default () => {
  const classes = createUseStyles(styles)();

  return (
    <div className={`${classes.appContainer} roboto`}>
      App Content
      <TestComponent1 />
    </div>
  );
};
