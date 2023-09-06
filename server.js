const http = require("http");
const app = require("./App");
const port = 7700;//local
const server = http.createServer(app);
module.exports = server;
app.listen(port);
module.exports = server;


