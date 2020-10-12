import Joi from "joi";

export interface IFeedChannel {
    title: string;
    description: string;
    link: string;
    items: IFeedItem[];
}

export interface IFeedItem {
    title: string;
    description: string;
    link: string;
    guid: string;
}

export const schema = Joi.object({
    title: Joi.string().required(),
    description: Joi.string().required(),
    link: Joi.string().uri().required(),
    items: Joi.array().items(
        Joi.object({
            title: Joi.string().required(),
            description: Joi.string().required(),
            link: Joi.string().uri().required(),
            guid: Joi.string().required(),
        })
    ).required(),
});

export type IFeedImpl = (src: string) => Promise<IFeedChannel>;
