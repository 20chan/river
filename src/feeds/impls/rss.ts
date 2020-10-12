import fetch from "node-fetch";
import { parseStringPromise } from "xml2js";

export const getFeeds: IFeedImpl = async (src) => {
    const resp = await fetch(src);
    const body = await resp.text();
    const data = await parseStringPromise(body);
    return data;
};