declare namespace NodeJS {
  interface ProcessEnv {
    BUILD_LOCALE: "en" | "in";
    GOOGLE_ANALYTICS_TRACKING_ID: string;
    baseUrl:  string;
    buildLocale: "en" | "in";
    productionUrlEn: string;
    productionUrlIn: string;
    orderedWorks: string;
  }
}
