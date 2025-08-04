import type { Get, Post } from "../types.js";
export declare const get: (options: Get) => Promise<{
    fromCache: boolean;
    updateTime: string;
    data: any;
}>;
export declare const post: (options: Post) => Promise<{
    fromCache: boolean;
    updateTime: string;
    data: any;
}>;
//# sourceMappingURL=getData.d.ts.map