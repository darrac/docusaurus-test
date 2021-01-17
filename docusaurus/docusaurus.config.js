module.exports = {
  title: 'My Site',
  tagline: 'The tagline of my site',
  url: 'https://darrac.github.io/docusaurus-test/',
  baseUrl: '/docusaurus-test/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'darrac', // Usually your GitHub org/user name.
  projectName: 'docusaurus-test', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Testing docusaurus',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {
          href: 'https://github.com/infinum/ngx-form-object',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      copyright: `Copyright © ${new Date().getFullYear()} Infinum`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
            'https://github.com/infinum/ngx-form-object',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
