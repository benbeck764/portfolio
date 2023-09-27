export type GoogleAnalyticsConfig = {
  trackingId: string;
  testMode?: boolean;
};

export type PageViewOptions = {
  page: string;
  title?: string;
  location?: string;
};

export type EventOptions = {
  action: string;
  label?: string;
  value?: number;
};
