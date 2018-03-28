import { Onemitter } from "onemitter";
export interface IControllerConfig<P, D, C> {
    params: P;
    data: D;
    context: C;
}
export default class Controller<P, D, C> extends Onemitter<D> {
    constructor(protected config: IControllerConfig<P, D, C>) {
        super();
        this.onInit();
    }
    public getInitialData() {
        return this.config.data;
    }
    public onInit() {
        //
    }
    public dispatch(actionName: string, ...args: any[]) {
        if ((this as any)[actionName]) {
            return (this as any)[actionName](...args);
        }
        throw new Error("Unknown action " + actionName);
    }
}
