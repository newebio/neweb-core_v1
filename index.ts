export { default as Controller } from "./Controller";
export * from "./Controller";
export interface IViewProps<P, D> {
    params: P;
    data: D;
    navigate: (url: string) => void;
    dispatch: (actionName: string, ...args: any[]) => Promise<void>;
}
