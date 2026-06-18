import type { Metadata } from 'next';

// Production domain is provided by Vercel (VERCEL_PROJECT_PRODUCTION_URL,
// e.g. docs.sammier.com); falls back to localhost in dev / non-Vercel builds.
export const baseUrl =
  process.env.NODE_ENV === 'development' ||
  !process.env.VERCEL_PROJECT_PRODUCTION_URL
    ? new URL('http://localhost:3000')
    : new URL(`https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`);

export function createMetadata(override: Metadata): Metadata {
  return {
    ...override,
    icons: {
      icon: '/favicon.ico',
      shortcut: '/favicon.ico',
      apple: '/assets/logo.png',
    },
    openGraph: {
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      url: baseUrl.toString(),
      images: '/assets/logo.png',
      siteName: 'Code Router',
      type: 'website',
      ...override.openGraph,
    },
    twitter: {
      card: 'summary_large_image',
      title: override.title ?? undefined,
      description: override.description ?? undefined,
      images: '/assets/logo.png',
      ...override.twitter,
    },
  };
}
