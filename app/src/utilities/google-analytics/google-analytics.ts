import ReactGA from 'react-ga4';
import {
  EventOptions,
  PageViewOptions,
  GoogleAnalyticsConfig,
} from './google-analytics.models';

class AppGoogleAnalytics {
  private static classInstance: AppGoogleAnalytics;
  private testMode?: boolean;

  public isInitialized(): boolean {
    return ReactGA.isInitialized;
  }

  public initialize(config: GoogleAnalyticsConfig): void {
    ReactGA.initialize(
      [
        {
          trackingId: config.trackingId,
          gaOptions: {
            send_page_view: false,
          },
          gtagOptions: {
            // Enable this for testing in local environment
            // debug_mode: true,
            send_page_view: false,
          },
        },
      ],
      { testMode: config.testMode }
    );
    this.testMode = config.testMode;
  }
  public pageView(options: PageViewOptions): void {
    const eventOptions = {
      hitType: 'pageview',
      page: options.page,
      title: options.title,
      location: options.location,
    };
    ReactGA.send(eventOptions);

    if (this.testMode) {
      console.info('[ga]', `\n${JSON.stringify(eventOptions)}`);
    }
  }

  public event(options: EventOptions, category: string, params?: any) {
    const eventOptions = { ...options, category };
    ReactGA.event(eventOptions, params);

    if (this.testMode) {
      console.info('[ga]', `\n${JSON.stringify(eventOptions)}`);
    }
  }

  static getInstance(): AppGoogleAnalytics {
    if (!this.classInstance) {
      this.classInstance = new AppGoogleAnalytics();
    }
    return this.classInstance;
  }
}

export default AppGoogleAnalytics;
