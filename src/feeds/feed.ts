interface IFeedChannel {
    title: string;
    description: string;
    link: string;
    items: IFeedItem[];
}

interface IFeedItem {
    title: string;
    description: string;
    link: string;
    guid: string;
}

type IFeedImpl = (src: string) => Promise<IFeedChannel>;
