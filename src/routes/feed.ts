import express from "express";
import { feeds } from "../feeds/impls";

const route = express.Router();

route.get("/", (req, resp) => {
    resp.send("healthy");
});

route.get("/types", (req, resp) => {
    resp.json(feeds.map(info => info.name));
});

export { route };