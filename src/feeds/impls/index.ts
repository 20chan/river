import { getFeeds as rss } from "./rss";

export const feeds = [
    { name: "rss", get: rss },
] as const;

type Feed = typeof feeds[number]["name"];
