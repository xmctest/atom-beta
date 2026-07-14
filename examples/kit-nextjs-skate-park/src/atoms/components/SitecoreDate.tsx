'use client';

import { DateField } from '@sitecore-content-sdk/nextjs';

type SitecoreDateProps = {
  props: {
    date?: {
      value?: string;
    };
  };
  children?: React.ReactNode;
};

/**
 * Sitecore Date field atom — renders via SDK DateField for empty/editing chrome.
 */
export const SitecoreDate = ({ props, children }: SitecoreDateProps) => {
  const { date } = props || {};

  if (!date) {
    return null;
  }

  return (
    <div className="atom-date">
      <DateField
        field={date}
        tag="time"
        render={(value) =>
          value
            ? value.toLocaleDateString(undefined, {
                year: 'numeric',
                month: 'short',
                day: 'numeric',
              })
            : null
        }
      />
      {children}
    </div>
  );
};
