'use client';

export const SitecoreContentCard = ({
  props,
  children,
}: {
  props: { title?: { value?: string | number } };
  children?: React.ReactNode;
}) => (
  <article className="atom-content-card">
    {props.title?.value ? <h3 className="atom-content-card__title">{props.title.value}</h3> : null}
    <div className="atom-content-card__body">{children}</div>
  </article>
);
