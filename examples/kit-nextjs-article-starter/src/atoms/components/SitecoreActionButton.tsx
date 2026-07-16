'use client';

type AtomRenderProps<TProps> = {
  props: TProps;
  children?: React.ReactNode;
  emit?: (event: string) => void;
  on?: (event: string) => { shouldPreventDefault?: boolean; emit: () => void };
};

export const SitecoreActionButton = ({
  props,
  children,
  emit,
  on,
}: AtomRenderProps<{ label?: { value?: string | number } }>) => {
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const press = on?.('press');
    if (press?.shouldPreventDefault) {
      event.preventDefault();
    }
    press?.emit();
    emit?.('press');
  };

  return (
    <button type="button" className="atom-action-button" onClick={handleClick}>
      {props.label?.value ?? 'Action'}
      {children}
    </button>
  );
};
