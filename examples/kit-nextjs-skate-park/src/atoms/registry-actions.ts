type SubmitParams = { formId?: string };

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
  /**
   * Real form submit for DS QA — reads state[formId] (from $bindState fields) and POSTs it.
   * Signature matches json-render ActionFn: (params, setState, state).
   */
  submit: async (
    params?: SubmitParams,
    setState?: (updater: (prev: Record<string, unknown>) => Record<string, unknown>) => void,
    state?: Record<string, unknown>
  ) => {
    const formId = params?.formId;
    if (!formId) {
      throw new Error('[atoms] submit requires params.formId');
    }

    const formData = (state?.[formId] as Record<string, unknown> | undefined) ?? {};

    const response = await fetch('/api/atoms/submit', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ formId, data: formData }),
    });

    if (!response.ok) {
      throw new Error(`[atoms] submit failed (${response.status})`);
    }

    const result = (await response.json()) as Record<string, unknown>;

    if (process.env.NODE_ENV === 'development') {
      console.info('[atoms] submit', { formId, data: formData, result });
    }

    setState?.((prev) => ({
      ...prev,
      submitResult: {
        formId,
        ok: true,
        ...result,
      },
    }));
  },
};
