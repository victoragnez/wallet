import type { YahooFinanceOptions } from "./options.js";
import type { QueueOptions } from "./queue.js";
interface YahooFinanceFetchThisEnv {
  [key: string]: any;
  URLSearchParams: (init?: any) => any;
  fetch: Function;
  fetchDevel: Function;
}
interface YahooFinanceFetchThis {
  [key: string]: any;
  _env: YahooFinanceFetchThisEnv;
  _opts: YahooFinanceOptions;
}
interface YahooFinanceFetchModuleOptions {
  devel?: string | boolean;
  fetchOptions?: Object;
  queue?: QueueOptions;
}
declare function substituteVariables(
  this: YahooFinanceFetchThis,
  urlBase: string
): string;
declare function yahooFinanceFetch(
  this: YahooFinanceFetchThis,
  urlBase: string,
  params?: {},
  moduleOpts?: YahooFinanceFetchModuleOptions,
  func?: string
): Promise<any>;
export { substituteVariables };
export default yahooFinanceFetch;
