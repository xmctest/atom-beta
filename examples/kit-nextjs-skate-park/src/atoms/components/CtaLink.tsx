'use client';

type AtomRenderProps<TProps> = {
  props: TProps;
  children?: React.ReactNode;
  emit?: (event: string) => void;
  on?: (event: string) => { shouldPreventDefault?: boolean; emit: () => void };
};

export const CtaLink = ({
  props,
  children,
  emit,
  on,
}: AtomRenderProps<{ cta?: { value?: { href?: string; text?: string; target?: string } } }>) => {
  const href = props.cta?.value?.href ?? '#';
  const text = props.cta?.value?.text ?? href;
  const target = props.cta?.value?.target;

  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>) => {
    const press = on?.('press');
    if (press?.shouldPreventDefault) {
      event.preventDefault();
    }
    press?.emit();
    emit?.('press');
  };

  return (
    <a className="atom-cta-link" href={href} target={target} onClick={handleClick}>
      {text}
      {children}
    </a>
  );
};
