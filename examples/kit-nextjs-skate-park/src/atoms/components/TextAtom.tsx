'use client';

export const TextAtom = ({ props }: { props: { text?: { value?: string | number } } }) => (
  <span className="atom-text">{props.text?.value ?? ''}</span>
);
