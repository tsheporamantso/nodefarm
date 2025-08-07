const fs = require("fs");
const http = require("http");
const url = require("url");

const data = fs.readFileSync(`${__dirname}/data/data.json`, "utf-8");
// console.log(data);

const server = http.createServer((req, res) => {
  const pathName = req.url;
  if (pathName === "/" || pathName === "overview") {
    res.end("This is OVERVIEW");
  } else if (pathName === "/api") {
    res.writeHead(200, {
      "Content-type": "application/json",
    });
    res.end(data);
  } else if (pathName === "/products") {
    res.end("This is PRODUCTS");
  } else {
    res.writeHead(404, {
      "Content-type": "text/html",
    });
    res.end("<h1>Page not found</h1>");
  }
});

const PORT = 8080;

server.listen(PORT, (err) => {
  if (err) {
    throw new err();
  } else {
    console.log(`Listening to request on port ${PORT}`);
  }
});
