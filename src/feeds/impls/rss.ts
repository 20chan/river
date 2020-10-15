import Parser from "rss-parser";
import { IFeedChannel, IFeedImpl, schema } from "../feed";

const parser = new Parser();

export const getFeeds: IFeedImpl = async (src) => {
    try {
        const feed = await parser.parseURL(src);
        const items = feed.items === undefined ? [] : feed.items.map(m => ({
            title: m.title || "",
            description: m.description || "",
            link: m.link || "",
            guid: m.guid || "",
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