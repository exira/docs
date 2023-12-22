import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: 'exira.com',
  tagline: '',
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
      }
    ]
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
      respectPrefersColorScheme: true,
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
      // links: [
      //   {
      //     title: 'Docs',
      //     items: [
      //       {
      //         label: 'Tutorial',
      //         to: '/docs/intro',
      //       },
      //     ],
      //   },

      //   {
      //     title: 'More',
      //     items: [
      //        {
      //         label: 'GitHub',
      //         href: 'https://github.com/exira/docs',
      //       },
      //     ],
      //   },
      // ],
      copyright: `© 2020-${new Date().getFullYear()} · exira.com vof · BE0759.397.459 · All rights reserved`,
    },

    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },

  } satisfies Preset.ThemeConfig,
};

export default config;
