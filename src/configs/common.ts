const common = {
  DB_URL: process.env.DATABASE_URL as string,
  FRONTEND_ORIGIN: process.env.FRONTEND_ORIGIN as string,
  CORS_OPTIONS_DEV: {
    origin: "*",
    preflightContinue: false,
    optionsSuccessStatus: 200,
  },
};

export default common;
