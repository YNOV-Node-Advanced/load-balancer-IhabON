const express = require("express");
const app = express();

const PORT = (process.env.PORT).trim() || 5000;

app.get("/", function(req, res) {
    res.send("Hello World depuis le port: " + PORT);
});

app.listen(PORT, () => console.log("Port sous écoute:" + PORT));