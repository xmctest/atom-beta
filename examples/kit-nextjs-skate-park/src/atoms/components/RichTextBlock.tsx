'use client';

import { RichText, type RichTextField } from '@sitecore-content-sdk/nextjs';

type RichTextBlockProps = {
  props: {
    body?: RichTextField;
  };
  children?: React.ReactNode;
};

/**
 * Sitecore Rich Text atom — uses SDK RichText so empty/editing chrome matches
 * standard field rendering (not a raw dangerouslySetInnerHTML stub).
 */
export const RichTextBlock = ({ props, children }: RichTextBlockProps) => {
  const { body } = props || {};

  if (!body) {
    return null;
  }

  return (
    <div className="atom-rich-text">
      <RichText field={body} tag="div" />
      {children}
    </div>
  );
};
