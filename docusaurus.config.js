// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'OsdagBridge',
  tagline: 'Bridge Analysis and Design Software',
  favicon: 'images/osdag_logo.png',

  future: {
    v4: true,
  },

  url: 'https://osdagbridge.github.io',
  baseUrl: '/',

  organizationName: 'osdagbridge',
  projectName: 'OsdagBridge',

  onBrokenLinks: 'throw',

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      tableOfContents: {
        minHeadingLevel: 2,
        maxHeadingLevel: 4,
      },
      image: 'images/3d-cad.png',
      colorMode: {
        respectPrefersColorScheme: true,
      },
      navbar: {
        title: 'OsdagBridge',
        logo: {
          alt: 'OsdagBridge Logo',
          src: 'images/osdag_logo.png',
        },
        items: [
          {
            to: '/',
            label: 'Home',
            position: 'left',
          },
          {
            to: '/installation',
            label: 'Installation',
            position: 'left',
          },
          {
            to: '/getting-started',
            label: 'Getting Started',
            position: 'left',
          },
          {
            type: 'docSidebar',
            sidebarId: 'osdagBridgesidebar',
            position: 'left',
            label: 'User Guide',
          },
          {
            to: '/faq',
            label: 'FAQ',
            position: 'left',
          },
          {
            to: '/contact',
            label: 'Contact',
            position: 'left',
          },
          {
            href: 'https://github.com/osdag-admin/OsdagBridge',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Navigation',
            items: [
              {
                label: 'Home',
                to: '/',
              },
              {
                label: 'Installation',
                to: '/installation',
              },
              {
                label: 'Getting Started',
                to: '/getting-started',
              },
              {
                label: 'User Guide',
                to: '/docs/1-introduction',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/osdag-admin/OsdagBridge',
              },
              {
                label: 'Discord Server',
                href: 'https://discord.gg/jkNjU53Mhz',
              },
              {
                label: 'Report an Issue',
                href: 'https://github.com/osdag-admin/OsdagBridge/issues',
              },
              {
                label: 'Contact Us',
                to: '/contact',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Osdag',
                href: 'https://osdag.fossee.in/',
              },
              {
                label: 'FOSSEE',
                href: 'https://fossee.in/',
              },
              {
                label: 'All Releases',
                href: 'https://github.com/garvit000/OsdagBridge/releases',
              },
              {
                label: 'License',
                href: 'https://github.com/osdag-admin/OsdagBridge/blob/dev/LICENSE',
              },
            ],
          },
        ],
        copyright: `2026 OsdagBridge · LGPL-3.0`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
