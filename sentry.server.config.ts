import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://fb67cf2f35f3257d1e31820dccfdc839@o4506881154351104.ingest.us.sentry.io/4506881155596289",

  // Set tracesSampleRate to 1.0 to capture 100%
  // of transactions for performance monitoring.
  // We recommend adjusting this value in production
  tracesSampleRate: 1.0,

  // ...

  // Note: if you want to override the automatic release value, do not set a
  // `release` value here - use the environment variable `SENTRY_RELEASE`, so
  // that it will also get attached to your source maps
});
