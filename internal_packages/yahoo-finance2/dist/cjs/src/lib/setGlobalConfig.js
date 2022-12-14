"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
const validateAndCoerceTypes_js_1 = __importDefault(
  require("./validateAndCoerceTypes.js")
);
function setGlobalConfig(config) {
  (0, validateAndCoerceTypes_js_1.default)({
    object: config,
    source: "setGlobalConfig",
    type: "options",
    options: this._opts.validation,
    schemaKey: "#/definitions/YahooFinanceOptions",
  });
  mergeObjects(this._opts, config);
}
exports.default = setGlobalConfig;
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
