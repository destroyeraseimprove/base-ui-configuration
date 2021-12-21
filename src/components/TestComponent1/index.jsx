import styles from "./styles";
import React, { useState, useRef, useEffect } from "react";
import { createUseStyles } from "react-jss";
import http from "common/http";
import Loader from "common/components/Loader";

export default (props) => {
  const classes = createUseStyles(styles)();

  const [testData, setTestData] = useState(null);

  useEffect(() => {
    setTimeout(() => {
      http
        .fetch({
          url: "test1route",
          method: "GET",
        })
        .then((data) => {
          console.log(data, "data");

          setTestData(JSON.stringify(data));
        });
    }, 2000);
  }, []);

  return (
    <div className={classes.testDataWrapper}>
      <h5>Test data received from http server using AJAX request</h5>
      {!testData ? <Loader /> : <code>{testData}</code>}
    </div>
  );
};
