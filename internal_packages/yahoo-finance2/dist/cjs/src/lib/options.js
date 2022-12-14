"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const options = {
  YF_QUERY_HOST: process.env.YF_QUERY_HOST || "query2.finance.yahoo.com",
  queue: {
    concurrency: 4,
    timeout: 60,
  },
  validation: {
    logErrors: true,
    logOptionsErrors: true,
  },
};
exports.default = options;
