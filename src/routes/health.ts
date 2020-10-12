import express from "express";

const route = express.Router();

route.get("/", (req, resp) => {
    resp.send("healthy");
});

export { route };