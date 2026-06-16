import Link from 'next/link';
import { BookOpen, ArrowRight } from 'lucide-react';
import { Hero } from './page.client';
import { getLocalePath } from '@/lib/i18n';

const contentMap: Record<
  string,
  {
    badge: string;
    title: string;
    subtitle: string;
    highlight: string;
    getStarted: string;
    browseDocs: string;
  }
> = {
  en: {
    badge: 'The unified gateway for your AI models',
    title: 'Connect every AI provider, manage access and cost,',
    subtitle: 'and ship on one unified',
    highlight: 'API',
    getStarted: 'Getting Started',
    browseDocs: 'API Reference',
  },
  zh: {
    badge: '统一的 AI 模型网关',
    title: '接入所有 AI 供应商，统一管理访问与成本，',
    subtitle: '用一套',
    highlight: 'API',
    getStarted: '快速开始',
    browseDocs: 'API 文档',
  },
  ja: {
    badge: 'AI モデルのための統一ゲートウェイ',
    title: 'すべての AI プロバイダーを接続し、アクセスとコストを管理し、',
    subtitle: '一つの統一された',
    highlight: 'API',
    getStarted: 'はじめに',
    browseDocs: 'API リファレンス',
  },
} as const;

export default async function Page({
  params,
}: {
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const content = contentMap[lang] || contentMap.en;

  return (
    <main className="text-landing-foreground dark:text-landing-foreground-dark pt-4 pb-6 md:pb-12">
      <div className="relative mx-auto flex h-[70vh] max-h-[900px] min-h-[600px] w-full max-w-[1400px] overflow-hidden rounded-2xl border bg-origin-border">
        <Hero />
        <div className="z-2 flex size-full flex-col px-4 max-md:items-center max-md:text-center md:p-12">
          <p className="border-brand/50 text-brand mt-12 w-fit rounded-full border p-2 text-xs font-medium">
            {content.badge}
          </p>
          <h1 className="leading-tighter my-8 text-4xl font-medium xl:mb-12 xl:text-5xl">
            {content.title}
            <br />
            {content.subtitle}{' '}
            <span className="text-brand">{content.highlight}</span>.
          </h1>
          <div className="flex w-fit flex-row flex-wrap items-center justify-center gap-4">
            <Link
              href={getLocalePath(lang, 'docs')}
              className="bg-brand text-brand-foreground hover:bg-brand-200 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 font-medium tracking-tight transition-colors max-sm:text-sm"
            >
              <BookOpen className="size-4" />
              {content.getStarted}
            </Link>
            <Link
              href={getLocalePath(lang, 'docs/api')}
              className="bg-fd-secondary text-fd-secondary-foreground hover:bg-fd-accent inline-flex items-center justify-center gap-2 rounded-full border px-5 py-3 font-medium tracking-tight transition-colors max-sm:text-sm"
            >
              {content.browseDocs}
              <ArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
