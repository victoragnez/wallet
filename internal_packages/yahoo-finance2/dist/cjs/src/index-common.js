"use strict";
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, "__esModule", { value: true });
// libs
const yahooFinanceFetch_js_1 = __importDefault(
  require("./lib/yahooFinanceFetch.js")
);
const moduleExec_js_1 = __importDefault(require("./lib/moduleExec.js"));
const options_js_1 = __importDefault(require("./lib/options.js"));
const errors_js_1 = __importDefault(require("./lib/errors.js"));
const setGlobalConfig_js_1 = __importDefault(
  require("./lib/setGlobalConfig.js")
);
const validateAndCoerceTypes_js_1 = require("./lib/validateAndCoerceTypes.js");
// modules
const autoc_js_1 = __importDefault(require("./modules/autoc.js"));
const chart_js_1 = __importDefault(require("./modules/chart.js"));
const historical_js_1 = __importDefault(require("./modules/historical.js"));
const insights_js_1 = __importDefault(require("./modules/insights.js"));
const options_js_2 = __importDefault(require("./modules/options.js"));
const quote_js_1 = __importDefault(require("./modules/quote.js"));
const quoteSummary_js_1 = __importDefault(require("./modules/quoteSummary.js"));
const recommendationsBySymbol_js_1 = __importDefault(
  require("./modules/recommendationsBySymbol.js")
);
const search_js_1 = __importDefault(require("./modules/search.js"));
const trendingSymbols_js_1 = __importDefault(
  require("./modules/trendingSymbols.js")
);
// other
const quoteCombine_js_1 = __importDefault(require("./other/quoteCombine.js"));
exports.default = {
  // internal
  _env: {},
  _fetch: yahooFinanceFetch_js_1.default,
  _moduleExec: moduleExec_js_1.default,
  _opts: options_js_1.default,
  _disallowAdditionalProps: validateAndCoerceTypes_js_1.disallowAdditionalProps,
  // common
  errors: errors_js_1.default,
  setGlobalConfig: setGlobalConfig_js_1.default,
  // modules,
  autoc: autoc_js_1.default,
  _chart: chart_js_1.default,
  historical: historical_js_1.default,
  insights: insights_js_1.default,
  options: options_js_2.default,
  quote: quote_js_1.default,
  quoteSummary: quoteSummary_js_1.default,
  recommendationsBySymbol: recommendationsBySymbol_js_1.default,
  search: search_js_1.default,
  trendingSymbols: trendingSymbols_js_1.default,
  // other
  quoteCombine: quoteCombine_js_1.default,
};
