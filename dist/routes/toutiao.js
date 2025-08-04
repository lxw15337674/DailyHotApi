import { get } from "../utils/getData.js";
import { getTime } from "../utils/getTime.js";
export const handleRoute = async (_, noCache) => {
    const listData = await getList(noCache);
    const routeData = {
        name: "toutiao",
        title: "今日头条",
        type: "热榜",
        link: "https://www.toutiao.com/",
        total: listData.data?.length || 0,
        ...listData,
    };
    return routeData;
};
const getList = async (noCache) => {
    const url = `https://www.toutiao.com/hot-event/hot-board/?origin=toutiao_pc`;
    const result = await get({ url, noCache });
    const list = result.data.data;
    return {
        ...result,
        data: list.map((v) => ({
            id: v.ClusterIdStr,
            title: v.Title,
            cover: v.Image.url,
            timestamp: getTime(v.ClusterIdStr),
            hot: Number(v.HotValue),
            url: `https://www.toutiao.com/trending/${v.ClusterIdStr}/`,
            mobileUrl: `https://api.toutiaoapi.com/feoffline/amos_land/new/html/main/index.html?topic_id=${v.ClusterIdStr}`,
        })),
    };
};
