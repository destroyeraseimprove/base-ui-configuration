import fontFaceStyles from "./font-face.styles.js";
export default {
  ...{ ...fontFaceStyles },

  "@global": {
    "html, body, #app": {
      width: "100%",
      height: "100%",
      padding: 0,
      margin: 0,
      font: "12px Arial",
    },
    html: {
      background: "#ccc",
    },
    ".roboto": {
      fontFamily: "'Roboto', sans-serif",
    },
  },
};
