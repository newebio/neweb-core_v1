"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const onemitter_1 = require("onemitter");
class DataSource extends onemitter_1.Onemitter {
    constructor(config) {
        super();
        this.config = config;
        if (typeof (config.data) !== "undefined") {
            this.onInitialData(config.data);
        }
        this.onInit();
    }
    onInitialData(value) {
        this.emit(value);
    }
    onInit() {
        if (typeof (this.config.data) === "undefined") {
            this.emit(null);
        }
    }
}
exports.default = DataSource;
