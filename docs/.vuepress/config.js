module.exports = {
  title: 'Kick Consent Manager',
  locales: {
    '/': {
      lang: 'de-DE',
      title: 'Kick Test Lab',
      description: 'Kick Test Lab ist eine Joomla! Komponente um ein Testzentrum für COVID-19 Schnelltests zu betreiben.'
    }
  },
  head: [
    ['link', { rel: 'icon', href: `/logo.png` }]
  ],
  themeConfig: {
    repo: 'Kicktemp/ktldocs',
    editLinks: true,
    smoothScroll: true,
    locales: {
      '/': {
        label: 'Deutsch',
        selectText: 'Sprachen',
        ariaLabel: 'Sprachen',
        editLinkText: 'Diese Seite auf GitHub bearbeiten',
        lastUpdated: 'Zuletzt aktualisiert',
        serviceWorker: {
          updatePopup: {
            message: "Neuer Inhalt verfügbar.",
            buttonText: "Neuladen"
          }
        },
        nav: require('./nav/de'),
        sidebar: {
          '/guide/': getGuideSidebar('Guide', 'Advanced'),
        }
      }
    }
  },
  plugins: [
    ['@vuepress/back-to-top', true],
    [
      '@vuepress/plugin-medium-zoom',
      {
        selector: '.theme-default-content img',
        delay: 500,
        options: {
          margin: 24,
          background: '#009fe3',
          scrollOffset: 0,
        },
      },
    ],
  ],
  extraWatchFiles: [
    '.vuepress/nav/de.js'
  ],
  configureWebpack: {
    resolve: {
      alias: {
        '@alias': '/'
      }
    }
  }
}

function getGuideSidebar (groupA, groupB) {
  return [
    {
      title: groupA,
      collapsable: true,
      children: [
        '',
        'getting-started',
        'options',
        'categories',
        'services',
        'cookies',
        'scripts',
        'consents',
        'reports'
      ]
    }
  ]
}
