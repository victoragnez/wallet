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
export default options;
