import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'exira.com',
  tagline: (() => {
    switch (process.env.DOCUSAURUS_CURRENT_LOCALE) {
      case 'nl':
        return 'Vind de perfecte domeinnaam';
      default:
        return 'Find the perfect domainname';
    }
  })(),
  favicon: 'img/favicon.ico',

  url: 'https://help.exira.com',
  baseUrl: '/',
  trailingSlash: true,

  organizationName: 'exira',
  projectName: 'docs',
  deploymentBranch:'gh-pages',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'nl'],
  },

  themes: [
    [
      '@docusaurus/theme-classic',
      {
        customCss: './custom.css',
      },
    ],
    [
      '@easyops-cn/docusaurus-search-local',
      {
        indexDocs: true,
        indexBlog: false,
        indexPages: false,
        docsRouteBasePath: '/',
        docsDir: 'docs',
        searchBarShortcutHint: false,
        searchBarPosition: 'right',
        hashed: true,
        language: ['en', 'nl'],
      },
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        path: 'docs',
        routeBasePath: '/',
        sidebarPath: './sidebars.ts',
      },
    ],
    '@docusaurus/plugin-sitemap',
  ],

  themeConfig: {
    image: 'img/social-card.png',

    metadata: [
      {name: 'keywords', content: 'domain, domainname, domain name, domainnames, domain names'},
    ],

    colorMode: {
      defaultMode: 'dark',
      disableSwitch: false,
      respectPrefersColorScheme: false,
    },

    navbar: {
      title: 'exira.com',
      logo: {
        alt: 'exira.com',
        src: 'img/exira-symbol.svg',
      },
      items: [
        {
          type: 'localeDropdown',
          position: 'right',
        },
      ],
      hideOnScroll: true,
    },

    docs: {
      sidebar: {
        hideable: false,
        autoCollapseCategories: false,
      },
    },

    footer: {
      style: 'dark',
      copyright: (() => {
        switch (process.env.DOCUSAURUS_CURRENT_LOCALE) {
          case 'nl':
            return `© 2020-${new Date().getFullYear()} &middot; exira.com vof &middot; BE0759.397.459 &middot; Alle rechten voorbehouden`;
          default:
            return `© 2020-${new Date().getFullYear()} &middot; exira.com vof &middot; BE0759.397.459 &middot; All rights reserved`;
        }
      })(),
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },

  } satisfies Preset.ThemeConfig,
};

export default config;
