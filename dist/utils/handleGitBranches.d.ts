/**
 * 获取远程仓库的所有分支名
 */
export default function (): Promise<{
    origin: "github" | "gitee";
    branches: {
        name: any;
        value: any;
    }[];
}>;
