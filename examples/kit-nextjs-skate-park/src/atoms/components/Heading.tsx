'use client';

export const Heading = ({
  props,
  children,
}: {
  props: { title?: { value?: string | number } };
  children?: React.ReactNode;
}) => (
  <div className="atom-heading">
    <h2>{props.title?.value ?? ''}</h2>
    {children}
  </div>
);
