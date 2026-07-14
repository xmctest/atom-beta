'use client';

import { File, type FileField } from '@sitecore-content-sdk/nextjs';

type SitecoreFileProps = {
  props: {
    file?: FileField;
  };
  children?: React.ReactNode;
};

/**
 * Sitecore File field atom — renders a download link via SDK File.
 */
export const SitecoreFile = ({ props, children }: SitecoreFileProps) => {
  const { file } = props || {};

  if (!file?.value?.src) {
    return null;
  }

  return (
    <div className="atom-file">
      <File field={file} className="atom-file-link">
        {file.value.title || file.value.displayName || 'Download file'}
      </File>
      {children}
    </div>
  );
};
