const fs = require("fs");
const { Server } = require("http");
const replaceIt = require("./modules/replaceIt.js");
// const textIn = fs.readFileSync("./txt/input.txt", "utf-8");
// // console.log(textIn);
// const textOut = `This is text : ${textIn}.\n Created on ${Date.now()}`;
// fs.writeFileSync("./txt/output.txt", textOut);

//Async Method

// const fs = require("fs");
// fs.readFile("./txt/input.txt", "utf-8", (err, data) => {
//   console.log(data);
//   fs.readFile("./txt/append.txt", "utf-8", (err, data2) => {
//     console.log(data2);
//     fs.writeFile("./txt/final.txt", `${data}\n${data2}`, "utf-8", (err) => {
//       console.log("Your file written Successfully",err);
//     });
//   });
// });

// Creating Server

let data = fs.readFileSync("./dev-data/data.json", "utf-8");
const overview = fs.readFileSync("./templates/overview.html", "utf-8");
const product = fs.readFileSync("./templates/product.html", "utf-8");
const card = fs.readFileSync("./templates/card.html", "utf-8");
const http = require("http");
const url = require("url");
data = JSON.parse(data);
const server = http.createServer((req, res) => {
  const { pathname, query } = url.parse(req.url, true);
  console.log(req.url);
  if (req.url === "/overview" || req.url === "/") {
    res.writeHead(200, { "content-type": "text/html" });
    const a = data.map((e) => replaceIt(card, e)).join("");
    const output = overview.replace("{%CARD%}", a);
    // console.log(a);
    res.end(output);
  } else if (pathname === "/product") {
    res.writeHead(200, { "content-type": "text/html" });
    const pro = data[query.id];
    const output = replaceIt(product, pro);

    console.log("output");
    res.end(output);
  } else if (req.url === "/api") {
    res.writeHead(200, { "Content-type": "application/json" });
    res.end(data);
    // res.end("APi");
  } else {
    res.end("<h1>Listensing to request on port 8000</h1>");
  }
});
server.listen(8000, () => {
  console.log("Listensing to request on port 8000");
});
