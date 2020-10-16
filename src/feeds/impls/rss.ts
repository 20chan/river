import fetch from "node-fetch";
import Parser from "rss-parser";
import { IFeedChannel, IFeedImpl, schema } from "../feed";

const parser = new Parser();

export const getFeeds: IFeedImpl = async (src) => {
    try {
        const req = await fetch(src, {
            headers: { "User-Agent": "river" },
        });
        const xml = await req.text();
        const feed = await parser.parseString(xml);
        const items = feed.items === undefined ? [] : feed.items.map(m => ({
            title: m.title || "",
            description: m.content || "",
            link: m.link || "",
            guid: m.guid || m.link || "",
        }));
        const result = {
            title: feed.title || "",
            description: feed.description || "",
            link: feed.link || "",
            items,
        };
        await schema.validateAsync(result);
        return result;
    } catch (err) { throw err; }
};