const http = require("node:http");

const port = Number(process.env.PORT || 3000);

const server = http.createServer((req, res) => {
  res.writeHead(200, {
    "Content-Type": "text/html; charset=utf-8"
  });

  res.end(`
    <!DOCTYPE html>
    <html lang="uk">
      <head>
        <meta charset="utf-8">
        <title>Практична робота 6</title>
      </head>
      <body>
        <h1>Привіт з AWS EC2!</h1>
        <p>Застосунок Node.js працює.</p>
        <p>Литвинов Нікіта — КН41</p>
      </body>
    </html>
  `);
});

server.listen(port, "0.0.0.0", () => {
  console.log(`Server listening on port ${port}`);
});
