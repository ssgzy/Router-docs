import Link from 'next/link';
import { Github } from 'lucide-react';
import { getLocalePath } from '@/lib/i18n';

interface FooterProps {
  lang: string;
}

// AI Router source repository (fork of the upstream project). Placeholder until a
// dedicated docs repo is published — see report.
const SOURCE_REPO_URL = 'https://github.com/ssgzy/Router-new-api';

// ============================================
// Shared Data (same across all languages)
// ============================================
const socialLinks: { name: string; href: string; icon: React.ReactNode }[] = [
  {
    name: 'GitHub',
    href: SOURCE_REPO_URL,
    icon: <Github className="size-4" />,
  },
];

// ============================================
// Internal link paths (only labels need translation)
// ============================================
const internalPaths = {
  aboutProject: 'docs/guide/wiki/basic-concepts/project-introduction',
  contactUs: 'docs/support/community-interaction',
  features: 'docs/guide/wiki/basic-concepts/features-introduction',
  userGuide: 'docs/guide/home',
  apiDocs: 'docs/api',
} as const;

// ============================================
// Translations (only text that differs by language)
// ============================================
interface FooterTranslation {
  sections: {
    about: {
      title: string;
      aboutProject: string;
      contactUs: string;
      features: string;
    };
    docs: {
      title: string;
      userGuide: string;
      apiDocs: string;
    };
  };
  copyright: string;
}

const translations: Record<string, FooterTranslation> = {
  zh: {
    sections: {
      about: {
        title: '关于我们',
        aboutProject: '关于项目',
        contactUs: '联系我们',
        features: '功能特性',
      },
      docs: {
        title: '文档',
        userGuide: '使用指南',
        apiDocs: 'API 文档',
      },
    },
    copyright: '© 2026 AI Router.',
  },
  en: {
    sections: {
      about: {
        title: 'About Us',
        aboutProject: 'About Project',
        contactUs: 'Contact Us',
        features: 'Features',
      },
      docs: {
        title: 'Docs',
        userGuide: 'User Guide',
        apiDocs: 'API Docs',
      },
    },
    copyright: '© 2026 AI Router.',
  },
  ja: {
    sections: {
      about: {
        title: '私たちについて',
        aboutProject: 'プロジェクトについて',
        contactUs: 'お問い合わせ',
        features: '機能',
      },
      docs: {
        title: 'ドキュメント',
        userGuide: 'ユーザーガイド',
        apiDocs: 'APIドキュメント',
      },
    },
    copyright: '© 2026 AI Router.',
  },
};

// ============================================
// Build sections from translations
// ============================================
function buildSections(t: FooterTranslation) {
  return [
    {
      title: t.sections.about.title,
      links: [
        {
          label: t.sections.about.aboutProject,
          href: internalPaths.aboutProject,
        },
        { label: t.sections.about.contactUs, href: internalPaths.contactUs },
        { label: t.sections.about.features, href: internalPaths.features },
      ],
    },
    {
      title: t.sections.docs.title,
      links: [
        { label: t.sections.docs.userGuide, href: internalPaths.userGuide },
        { label: t.sections.docs.apiDocs, href: internalPaths.apiDocs },
      ],
    },
  ];
}

// ============================================
// Footer Component
// ============================================
export function Footer({ lang }: FooterProps) {
  const t = translations[lang] || translations.en;
  const sections = buildSections(t);

  return (
    <footer className="border-fd-border bg-fd-card/30 mt-auto border-t backdrop-blur-sm">
      <div className="mx-auto max-w-[1400px] px-6 py-12">
        {/* Top: Links Grid */}
        <div className="grid grid-cols-2 gap-x-8 gap-y-10 pb-10 md:grid-cols-3 lg:grid-cols-4 lg:gap-x-12">
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-fd-foreground mb-4 text-sm font-semibold">
                {section.title}
              </h3>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={getLocalePath(lang, link.href)}
                      className="text-fd-muted-foreground hover:text-fd-foreground text-sm transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom: Copyright and Social */}
        <div className="border-fd-border flex flex-col items-start justify-between gap-4 border-t pt-8 sm:flex-row sm:items-center">
          {/* Left: Copyright */}
          <div className="text-fd-muted-foreground flex flex-col gap-2 text-xs">
            <p>{t.copyright}</p>
          </div>

          {/* Right: Social Icons */}
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-fd-muted-foreground hover:text-fd-foreground transition-colors"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
