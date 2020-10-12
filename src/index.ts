import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = process.env.PORT || 7000;

app.use(bodyParser.json());

app.get("/api/health", (req, res) => {
    res.send("healthcheck");
});

const server = app.listen(PORT);
server.on("listening", () => {
    console.log(`server started at localhost:${PORT}`);
});