import express from "express";
import { feeds, getFeed, isValidFeed } from "../feeds/impls";

const route = express.Router();

route.get("/", (req, resp) => {
    resp.json(feeds.map(info => info.name));
});

route.get("/:feed", async (req, resp) => {
    const feed = req.params.feed;
    const url = req.query.url;
    if (!isValidFeed(feed)) {
        resp.status(400);
        resp.send({"error": true, "message": "invalid feed"});
        return;
    }
    if (typeof url !== "string" || url === undefined || url === null) {
        resp.status(400);
        resp.send({"error": true, "message": "invalid url"});
        return;
    }

    try {
        const result = await getFeed(feed).get(url);
        resp.json(result);
    } catch {
        resp.status(400);
        resp.send({"error": true, "message": "fetch failed"});
    }
});

export { route };