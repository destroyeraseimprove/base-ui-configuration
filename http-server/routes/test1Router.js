const express = require("express");
const router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log("Time: ", Date.now());
  next();
});

router.get("/", function (req, res) {
  const result = [
    {
      id: 1,
      name: "test item 1",
    },
    {
      id: 2,
      name: "test item 2",
    },
  ];

  res.end(JSON.stringify(result));
});

router.get("/:id", (req, res) => {
  const result = {
    id: 1,
    name: "test item 1",
  };

  res.end(JSON.stringify(result));
});

router.put("/:id", (req, res) => {});

router.post("/", function (req, res) {});

module.exports = router;
