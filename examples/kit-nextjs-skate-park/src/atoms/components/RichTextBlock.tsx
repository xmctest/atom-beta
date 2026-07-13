'use client';

export const RichTextBlock = ({ props }: { props: { body?: { value?: string } } }) => (
  <div className="atom-rich-text" dangerouslySetInnerHTML={{ __html: props.body?.value ?? '' }} />
);
