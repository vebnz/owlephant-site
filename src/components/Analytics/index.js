import ReactGA from "react-ga";

export const initGoogleAnalytics = () => {
  ReactGA.initialize("UA-162522027-1");
};

export const registerPageView = () => {
  console.log("registerPageView -> window.location.pathname", window.location.pathname)
  ReactGA.set({ page: window.location.pathname });
  ReactGA.pageview(window.location.pathname);
};
