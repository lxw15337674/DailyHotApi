interface CurrentDateTime {
    year: string;
    month: string;
    day: string;
    hour: string;
    minute: string;
    second: string;
}
/**
 * 将时间字符串或数字转换为时间戳
 * @param timeInput 时间字符串或数字
 * @returns 时间戳
 */
export declare const getTime: (timeInput: string | number) => number | undefined;
/**
 * 获取当前日期时间
 * @param padZero 是否补零
 * @returns 当前日期时间
 */
export declare const getCurrentDateTime: (padZero?: boolean) => CurrentDateTime;
export {};
//# sourceMappingURL=getTime.d.ts.map