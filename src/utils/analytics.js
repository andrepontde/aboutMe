// Google Analytics utility functions
export const GA_MEASUREMENT_ID = process.env.REACT_APP_GA_MEASUREMENT_ID;

// Check if Google Analytics is loaded
export const isGALoaded = () => {
  return typeof window.gtag !== 'undefined' && GA_MEASUREMENT_ID;
};

// Track page views
export const trackPageView = (page_path) => {
  if (isGALoaded()) {
    window.gtag('config', GA_MEASUREMENT_ID, {
      page_path,
    });
  }
};

// Track custom events
export const trackEvent = (action, category = 'general', label = '', value = 0) => {
  if (isGALoaded()) {
    window.gtag('event', action, {
      event_category: category,
      event_label: label,
      value: value,
    });
  }
};

// Track specific portfolio events
export const trackPortfolioEvent = {
  projectClick: (projectName) => trackEvent('project_click', 'portfolio', projectName),
  resumeDownload: () => trackEvent('resume_download', 'engagement'),
  contactForm: (method) => trackEvent('contact_attempt', 'engagement', method),
  externalLink: (linkName) => trackEvent('external_link_click', 'navigation', linkName),
  sectionView: (sectionName) => trackEvent('section_view', 'navigation', sectionName),
};
