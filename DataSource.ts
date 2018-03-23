import { Onemitter } from "onemitter";
export interface IDataSourceConfig<D, P, R> {
    params: P;
    data: D;
    remote: R;
}
export default class DataSource<D, P, R> extends Onemitter<D> {
    constructor(protected config: IDataSourceConfig<D, P, R>) {
        super();
        if (typeof (config.data) !== "undefined") {
            this.onInitialData(config.data);
        }
        this.onInit();
    }
    public onInitialData(value: D) {
        this.emit(value);
    }
    public onInit() {
        if (typeof (this.config.data) === "undefined") {
            this.emit(null as any);
        }
    }
}
