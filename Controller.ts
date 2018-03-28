import { Onemitter } from "onemitter";
export interface IControllerConfig<D, P> {
    params: P;
    data: D;
}
export default class Controller<D, P> extends Onemitter<D> {
    constructor(protected config: IControllerConfig<D, P>) {
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
