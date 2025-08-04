import { ListContext } from "../types";
/**
 * 定义 Trending 仓库信息的类型
 */
type RepoInfo = {
    owner: string;
    repo: string;
    url: string;
    description: string;
    language: string;
    stars: string;
    forks: string;
    todayStars?: string | number;
};
type TrendingRepoInfo = {
    data: RepoInfo[];
    updateTime: string;
    fromCache: boolean;
};
type TrendingType = "daily" | "weekly" | "monthly";
export declare const handleRoute: (c: ListContext) => Promise<{
    data: {
        owner: string;
        repo: string;
        url: string;
        description: string;
        language: string;
        stars: string;
        forks: string;
        todayStars?: string | number;
        id: number;
        title: string;
        desc: string;
        hot: string;
    }[];
    updateTime: string;
    fromCache: boolean;
    name: string;
    title: string;
    type: string;
    params: {
        type: {
            name: string;
            type: Record<TrendingType, string>;
        };
    };
    link: string;
    total: number;
}>;
/**
 * 爬取 GitHub Trending 列表
 * @param since 可选参数: 'daily' | 'weekly' | 'monthly'，默认值为 'daily'
 * @returns Promise<RepoInfo[]> 返回包含热门项目信息的数组
 */
export declare function getTrendingRepos(type?: TrendingType | string, ttl?: number): Promise<TrendingRepoInfo>;
export {};
//# sourceMappingURL=github.d.ts.map