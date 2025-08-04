import { post } from "../utils/getData.js";
import { getTime } from "../utils/getTime.js";
const typeMap = {
    hot: "人气榜",
    video: "视频榜",
    comment: "热议榜",
    collect: "收藏榜",
};
export const handleRoute = async (c, noCache) => {
    const type = c.req.query("type") || "hot";
    const listData = await getList({ type }, noCache);
    const routeData = {
        name: "36kr",
        title: "36氪",
        type: typeMap[type],
        params: {
            type: {
                name: "热榜分类",
                type: typeMap,
            },
        },
        link: "https://m.36kr.com/hot-list-m",
        total: listData.data?.length || 0,
        ...listData,
    };
    return routeData;
};
const getList = async (options, noCache) => {
    const { type } = options;
    const url = `https://gateway.36kr.com/api/mis/nav/home/nav/rank/${type}`;
    const result = await post({
        url,
        noCache,
        headers: {
            "Content-Type": "application/json; charset=utf-8",
        },
        body: {
            partner_id: "wap",
            param: {
                siteId: 1,
                platformId: 2,
            },
            timestamp: new Date().getTime(),
        },
    });
    const listType = {
        hot: "hotRankList",
        video: "videoList",
        comment: "remarkList",
        collect: "collectList",
    };
    const list = result.data.data[listType[type || "hot"]];
    return {
        ...result,
        data: list.map((v) => {
            const item = v.templateMaterial;
            return {
                id: v.itemId,
                title: item.widgetTitle,
                cover: item.widgetImage,
                author: item.authorName,
                timestamp: getTime(v.publishTime),
                hot: item.statCollect || undefined,
                url: `https://www.36kr.com/p/${v.itemId}`,
                mobileUrl: `https://m.36kr.com/p/${v.itemId}`,
            };
        }),
    };
};
