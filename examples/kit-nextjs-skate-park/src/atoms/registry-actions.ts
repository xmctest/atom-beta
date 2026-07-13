export const customAtomActions = {
  // Navigation is handled via atomsConfig.navigate in Providers + onSuccess.navigate in bindings.
  navigate: async (_params?: { path?: string }) => {},
  trackEvent: async (params?: { eventName?: string; payload?: string }) => {
    if (process.env.NODE_ENV === 'development') {
      console.info('[atoms] trackEvent', params);
    }
  },
  // These built-ins are resolved by json-render ActionProvider before registry handlers run.
  push: async (_params?: { screen?: string }) => {},
  pop: async () => {},
  validateForm: async (_params?: { statePath?: string }) => {},
};
