'use client';

type AtomRenderProps<TProps> = {
  props: TProps;
  children?: React.ReactNode;
  emit?: (event: string) => void;
  on?: (event: string) => { shouldPreventDefault?: boolean; emit: () => void };
};

export const SitecoreConditionalPanel = ({
  props,
  children,
}: AtomRenderProps<{ panelLabel?: { value?: string | number } }>) => (
  <div className="atom-conditional-panel" data-atom-visibility-wrapper="true">
    {props.panelLabel?.value ? (
      <p className="atom-conditional-panel__label">{props.panelLabel.value}</p>
    ) : null}
    {children}
  </div>
);
