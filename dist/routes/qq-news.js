import { get } from "../utils/getData.js";
import { getTime } from "../utils/getTime.js";
export const handleRoute = async (_, noCache) => {
    const listData = await getList(noCache);
    const routeData = {
        name: "qq-news",
        title: "腾讯新闻",
        type: "热点榜",
        link: "https://news.qq.com/",
        total: listData.data?.length || 0,
        ...listData,
    };
    return routeData;
};
const getList = async (noCache) => {
    const url = `https://r.inews.qq.com/gw/event/hot_ranking_list?page_size=50`;
    const result = await get({ url, noCache });
    const list = result.data.idlist[0].newslist.slice(1);
    return {
        ...result,
        data: list.map((v) => ({
            id: v.id,
            title: v.title,
            desc: v.abstract,
            cover: v.miniProShareImage,
            author: v.source,
            hot: v.hotEvent.hotScore,
            timestamp: getTime(v.timestamp),
            url: `https://new.qq.com/rain/a/${v.id}`,
            mobileUrl: `https://view.inews.qq.com/k/${v.id}`,
        })),
    };
};
