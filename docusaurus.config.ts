import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'AC WDIA',
  tagline: 'Web Development and Internet Applications at Algonquin College',
  favicon: 'img/favicon.svg',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://acwdia.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'acwdia', // Usually your GitHub org/user name.
  projectName: 'acwdia.github.io', // Usually your repo name.

  onBrokenLinks: 'throw',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  themes: [
    [
      '@easyops-cn/docusaurus-search-local',
      {
        hashed: true,
        language: ['en'],
        docsRouteBasePath: '/courses',
        docsDir: 'courses',
        indexBlog: false,
        searchBarPosition: 'right',
        highlightSearchTermsOnTargetPage: true,
        explicitSearchResultPath: true,
      },
    ],
  ],

  presets: [
    [
      'classic',
      {
        docs: {
          path: 'courses',
          routeBasePath: 'courses',
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        // blog: {
        //   showReadingTime: true,
        //   feedOptions: {
        //     type: ['rss', 'atom'],
        //     xslt: true,
        //   },
        //   // Please change this to your repo.
        //   // Remove this to remove the "edit this page" links.
        //   editUrl:
        //     'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        //   // Useful options to enforce blogging best practices
        //   onInlineTags: 'warn',
        //   onInlineAuthors: 'warn',
        //   onUntruncatedBlogPosts: 'warn',
        // },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    colorMode: {
      respectPrefersColorScheme: true,
    },
    navbar: {
      title: 'AC WDIA',
      logo: {
        alt: 'Algonquin College',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'cst8117Sidebar',
          position: 'left',
          label: 'CST8117',
          title: 'Cross-Platform Web Design',
          level: 1
        },
        {
          type: 'docSidebar',
          sidebarId: 'cst8209Sidebar',
          position: 'left',
          label: 'CST8209',
          title: 'Web Programming I',
          level: 1
        },
        {
          type: 'docSidebar',
          sidebarId: 'cst8279Sidebar',
          position: 'left',
          label: 'CST8279',
          title: 'Introduction to Computer Programming using Python',
          level: 1
        },
        {
          type: 'docSidebar',
          sidebarId: 'cst8260Sidebar',
          position: 'left',
          label: 'CST8260',
          title: 'Database System and Concepts',
          level: 1
        },
        {
          type: 'docSidebar',
          sidebarId: 'cst8250Sidebar',
          position: 'left',
          label: 'CST8250',
          title: 'Database Design and Administration',
          level: 2
        },
        {
          type: 'docSidebar',
          sidebarId: 'cst8253Sidebar',
          position: 'left',
          label: 'CST8253',
          title: 'Web Programming II',
          level: 2
        },
        {
          type: 'docSidebar',
          sidebarId: 'cst8254Sidebar',
          position: 'left',
          label: 'CST8254',
          title: 'Network Operating Systems',
          level: 2
        },
        {
          type: 'docSidebar',
          sidebarId: 'cst8318Sidebar',
          position: 'left',
          label: 'CST8318',
          title: 'Graphics Technologies',
          level: 2
        },
        {
          type: 'docSidebar',
          sidebarId: 'cst8256Sidebar',
          position: 'left',
          label: 'CST8256',
          title: 'Web Programming Languages I',
          level: 3
        },
        {
          type: 'docSidebar',
          sidebarId: 'cst8257Sidebar',
          position: 'left',
          label: 'CST8257',
          title: 'Web Applications Development',
          level: 3
        },
        {
          type: 'docSidebar',
          sidebarId: 'cst8259Sidebar',
          position: 'left',
          label: 'CST8259',
          title: 'Web Programming Languages II',
          level: 4
        },
        {
          type: 'docSidebar',
          sidebarId: 'cst8265Sidebar',
          position: 'left',
          label: 'CST8265',
          title: 'Web Security Basics',
          level: 4
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Content available under <a href="https://creativecommons.org/licenses/by-sa/4.0/legalcode">a Creative Commons license.</a>`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
