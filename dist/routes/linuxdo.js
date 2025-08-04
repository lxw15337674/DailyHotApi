import { get } from "../utils/getData.js";
import { getTime } from "../utils/getTime.js";
export const handleRoute = async (_, noCache) => {
    const listData = await getList(noCache);
    const routeData = {
        name: "linuxdo",
        title: "Linux.do",
        type: "热门文章",
        description: "Linux 技术社区热搜",
        link: "https://linux.do/hot",
        total: listData.data?.length || 0,
        ...listData,
    };
    return routeData;
};
const getList = async (noCache) => {
    const url = "https://linux.do/top/weekly.json";
    const result = await get({
        url,
        noCache,
        headers: {
            "Accept": "application/json",
        }
    });
    const topics = result.data.topic_list.topics;
    const list = topics.map((topic) => {
        return {
            id: topic.id,
            title: topic.title,
            desc: topic.excerpt,
            author: topic.last_poster_username,
            timestamp: getTime(topic.created_at),
            url: `https://linux.do/t/${topic.id}`,
            mobileUrl: `https://linux.do/t/${topic.id}`,
            hot: topic.views || topic.like_count
        };
    });
    return {
        ...result,
        data: list
    };
};
