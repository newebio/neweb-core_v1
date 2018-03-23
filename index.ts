export { default as DataSource } from "./DataSource";
export function data(target: any, propertyKey: string) {
    if (!target.__data) {
        target.__data = [];
    }
    target.__data.push(propertyKey);
}
export function action(target: any, propertyKey: string) {
    if (!target.__actions) {
        target.__actions = [];
    }
    target._actions.push(propertyKey);
}
