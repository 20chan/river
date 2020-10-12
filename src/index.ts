import express from "express";
import bodyParser from "body-parser";
import { route as health } from "./routes/health";

const app = express();
const PORT = process.env.PORT || 7000;

app.use(bodyParser.json());

app.use("/api/health", health);

const server = app.listen(PORT);
server.on("listening", () => {
    console.log(`server started at localhost:${PORT}`);
});