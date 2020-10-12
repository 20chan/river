import fetch from "node-fetch";
import { parse } from "fast-xml-parser";
import { IFeedImpl, schema } from "../feed";

export const getFeeds: IFeedImpl = async (src) => {
    const resp = await fetch(src);
    const body = await resp.text();
    const data = parse(body);
    const channelRaw = data.rss.channel;
    const items = channelRaw.item.map((m: any) => ({
        title: m.title,
        description: m.description,
        link: m.link,
        guid: m.guid,
    }));
    const result = {
        title: channelRaw.title,
        description: channelRaw.description,
        link: channelRaw.link,
        items,
    };

    try {
        await schema.validateAsync(result);
        return result;
    } catch (err) { throw err; }
};