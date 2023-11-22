const express = require("express");

const app = express();

app.get("/hi", (req, res) => {
  res.json({ message: "hello from server " });
});

app.listen(9000, () => {
  console.log("server started on 9000");
});
