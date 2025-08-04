interface CacheData {
    updateTime: string;
    data: unknown;
}
/**
 * 从缓存中获取数据
 * @param key 缓存键
 * @returns 缓存数据
 */
export declare const getCache: (key: string) => Promise<CacheData | undefined>;
/**
 * 将数据写入缓存
 * @param key 缓存键
 * @param value 缓存值
 * @param ttl 缓存过期时间（ 秒 ）
 * @returns 是否写入成功
 */
export declare const setCache: (key: string, value: CacheData, ttl?: number) => Promise<boolean>;
/**
 * 从缓存中删除数据
 * @param key 缓存键
 * @returns 是否删除成功
 */
export declare const delCache: (key: string) => Promise<boolean>;
export {};
//# sourceMappingURL=cache.d.ts.map