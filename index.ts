// tslint:disable-next-line:no-implicit-dependencies
import React = require("react");
export { default as Controller } from "./Controller";
export * from "./Controller";
import { IncomingHttpHeaders } from "http";
export interface IViewProps<P, D> {
    params: P;
    data: D;
    navigate: (url: string) => void;
    dispatch: (actionName: string, ...args: any[]) => Promise<void>;
}
export interface IRouter {
    resolve(req: IRequest): Promise<IRoute>;
    resolvePage(url: string): Promise<IRoutePage>;
}
export interface IPackInfo {
    name: string;
    type: "local" | "npm" | "internal";
    version?: string;
}
export interface IApp {
    fillTemplate(html: string, meta: IPageMetaInfo, initial: any): Promise<string>;
    getConfig(): Promise<any>;
    hasFrame(frameName: string): Promise<boolean>;
    requireContextModule(): Promise<any>;
    resolveFrameViewModule(frameName: string): Promise<IPackInfo>;
    requireFrameController(frameName: string): any;
    requireFrameView(frameName: string): Promise<React.ComponentClass<any>>;
    requireRouterModule(): any;
}
export interface IRequest {
    url: string;
    host: string;
    cookies: { [index: string]: string };
    headers: IncomingHttpHeaders;
}

export interface IPage extends IPageMetaInfo {
    id: string;
    sid: string;
    url: string;
    frames: IPageFrame[];
}
export interface IPageMetaInfo {
    title?: string;
    meta?: IPageMeta[];
}
export interface IPageMeta {
    name: string;
    content: string;
}
export interface IPageFrame {
    frameId: string;
    frameName: string;
    frameVersion: string;
    params: any;
    data: any;
    modules: IModule[];
}
export interface IEmitter {
    on: (eventName: string, ...args: any[]) => void;
    emit: (...args: any[]) => void;
}
export interface IModule {
    type: string;
    name: string;
    version?: string;
}
export interface IInitialInfo {
    page: IPage;
}
export type IRoute = IPageRoute | INotFoundRoute | IUnknownErrorRoute;
export interface IPageRoute {
    status: 200;
    page: IRoutePage;
}
export interface IRoutePage {
    url: string;
    frames: IRoutePageFrame[];
}
export interface IRoutePageFrame {
    name: string;
    params: any;
}
export interface INotFoundRoute {
    status: 404;
    text: string;
}
export interface IUnknownErrorRoute {
    status: 500;
    text: string;
}

export interface ICookie {
    name: string;
    value: string;
    expired: Date;
}
export interface ISession {
    id: string;
    hash: string;
    sid: string;
    setItem: (name: string, value: any) => Promise<void>;
    getItem: (name: string) => Promise<any>;
}
export interface IPageRenderResult {
    html: string;
    data: any[];
}
