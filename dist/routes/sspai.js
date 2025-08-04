import { get } from "../utils/getData.js";
import { getTime } from "../utils/getTime.js";
export const handleRoute = async (c, noCache) => {
    const type = c.req.query("type") || "热门文章";
    const listData = await getList({ type }, noCache);
    const routeData = {
        name: "sspai",
        title: "少数派",
        type: "热榜",
        params: {
            type: {
                name: "分类",
                type: ["热门文章", "应用推荐", "生活方式", "效率技巧", "少数派播客"],
            },
        },
        link: "https://sspai.com/",
        total: listData.data?.length || 0,
        ...listData,
    };
    return routeData;
};
const getList = async (options, noCache) => {
    const { type } = options;
    const url = `https://sspai.com/api/v1/article/tag/page/get?limit=40&tag=${type}`;
    const result = await get({ url, noCache });
    const list = result.data.data;
    return {
        ...result,
        data: list.map((v) => ({
            id: v.id,
            title: v.title,
            desc: v.summary,
            cover: v.banner,
            author: v.author.nickname,
            timestamp: getTime(v.released_time),
            hot: v.like_count,
            url: `https://sspai.com/post/${v.id}`,
            mobileUrl: `https://sspai.com/post/${v.id}`,
        })),
    };
};
