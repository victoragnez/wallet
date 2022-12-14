import validateAndCoerceTypes from "./validateAndCoerceTypes.js";
export default function setGlobalConfig(config) {
  validateAndCoerceTypes({
    object: config,
    source: "setGlobalConfig",
    type: "options",
    options: this._opts.validation,
    schemaKey: "#/definitions/YahooFinanceOptions",
  });
  mergeObjects(this._opts, config);
}
function mergeObjects(original, objToMerge) {
  const ownKeys = Reflect.ownKeys(objToMerge);
  for (const key of ownKeys) {
    if (typeof objToMerge[key] === "object") {
      mergeObjects(original[key], objToMerge[key]);
    } else {
      original[key] = objToMerge[key];
    }
  }
}
