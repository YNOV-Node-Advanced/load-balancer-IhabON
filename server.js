const express = require('express');
const app = express();

const PORT = process.env.PORT|| 5001;

app.get("/", function(req, res) {
    res.send("Hello World depuis le port: " + PORT);
});

app.listen(PORT, () => console.log("Port sous écoute:" + PORT));