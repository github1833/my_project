const express = require("express");
const app = express();

const port = 90;

app.use("/*", (req, resp, next) => {
  resp.set({
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "http://127.0.0.1:3000",
  });
  next();
});

app.get("/api/students", (req, resp) => {
  setTimeout(() => {
    resp.send([
      {
        id: "1",
        attributes: {
          name: "孙",
          age: 18,
          gender: "男",
          address: "花果山",
        },
      },
    ]);
  }, 3000);
});

app.listen(port, () => {
  console.log("服务器已经启动");
});
