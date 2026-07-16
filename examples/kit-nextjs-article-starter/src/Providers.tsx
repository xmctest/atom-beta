'use client';

import React from 'react';
import { Page, SitecoreProvider } from '@sitecore-content-sdk/nextjs';
import scConfig from 'sitecore.config';
import components from '.sitecore/component-map.client';
import { ThemeProvider } from '@/components/theme-provider/theme-provider.dev';
import { VideoProvider } from './contexts/VideoContext';
import { catalog, registry } from 'src/atoms';
import { useRouter } from 'next/navigation';

export default function Providers({
  children,
  page,
}: {
  children: React.ReactNode;
  page: Page;
}) {
  const router = useRouter();

  return (
    <SitecoreProvider
      api={scConfig.api}
      componentMap={components}
      page={page}
      loadImportMap={() => import('.sitecore/import-map.client')}
      atomsConfig={{ catalog, registry, navigate: router.push }}
    >
      <VideoProvider>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </VideoProvider>
    </SitecoreProvider>
  );
}
