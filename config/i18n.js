const website = require('./website')

module.exports = {
  'de-de': {
    default: true,
    path: 'de',
    locale: 'de-de',
    siteLanguage: 'de',
    ogLang: 'de_DE',
    dateFormat: 'DD.MM.YYYY',
    defaultTitle: website.title,
    defaultTitleAlt: website.titleAlt,
    defaultDescription: 'Basierend auf gatsby-starter-prismic mit Unterstützung für Lokalisierung (i18n)',
    headline: 'Schreiben und Veröffentlichen für LekoArts',
  },
  'en-gb': {
    path: 'en',
    locale: 'en-gb',
    siteLanguage: 'en',
    ogLang: 'en_US',
    dateFormat: 'DD/MM/YYYY',
    defaultTitle: website.title,
    defaultTitleAlt: website.titleAlt,
    defaultDescription: website.description,
    headline: website.headline,
  },
}
