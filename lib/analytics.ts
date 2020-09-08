export const GA_TRACKING_ID = "UA-103315238-2";

type Event = {
  action: CallableFunction;
  category: string;
  label: string;
  value: string;
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/pages
export const pageview = (url: string) => {
  (<any>window).gtag("config", GA_TRACKING_ID, {
    page_path: url,
  });
};

// https://developers.google.com/analytics/devguides/collection/gtagjs/events
export const event = ({ action, category, label, value }: Event) => {
  (<any>window).gtag("event", action, {
    event_category: category,
    event_label: label,
    value: value,
  });
};
