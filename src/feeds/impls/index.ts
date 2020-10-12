import { getFeeds as rss } from "./rss";

export const feeds = [
    { name: "rss", get: rss },
] as const;

type Feed = typeof feeds[number]["name"];

export const isValidFeed = (feed: string): feed is Feed => {
    return feeds.find(f => f.name === feed) !== undefined;
};

export const getFeed = (feed: Feed) => {
    return feeds.find(f => f.name === feed)!;
};