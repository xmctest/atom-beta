type NavigateFn = (path: string) => void;

let navigateRef: NavigateFn | undefined;

/** Bind router navigation for atom action handlers at runtime. */
export function bindAtomsNavigate(navigate: NavigateFn) {
  navigateRef = navigate;
}

export const customAtomActions = {
  navigate: async (params?: { path?: string }) => {
    navigateRef?.(params?.path ?? '/');
  },
  trackEvent: async (params?: { eventName?: string; payload?: string }) => {
    if (process.env.NODE_ENV === 'development') {
      console.info('[atoms] trackEvent', params);
    }
  },
  // push/pop are resolved by json-render ActionProvider before registry handlers run.
  push: async (_params?: { screen?: string }) => {},
  pop: async () => {},
};
