'user strict';

const path = require('path');

const i18nApp = require('i18n');
const i18nBrowser = require('i18n');
const i18nInternal = require('i18n');

const i18nBaseConf = {
  defaultLocale: 'en',
  locales: ['en', 'zh-cn'],
  fallbacks: {
    'en-us': 'en',
    'en-gb': 'en',
    'zh-tw': 'zh-cn'
  },
  objectNotation: true,
  queryParameter: 'lang',
  autoReload: true,
  updateFiles: false,
  syncFiles: false,
  extension: '.json',
  preserveLegacyCase: true
};

const i18nAppResourcesBasePath = path.join(__dirname, './lib/app/locales');
const i18nBrowserResourcesBasePath = path.join(__dirname, './lib/app/locales');
const i18nInternalResourcesBasePath = path.join(__dirname, './lib/internal/locales');

i18nApp.configure(Object.assign(i18nBaseConf, {
  directory: i18nAppResourcesBasePath
}));

i18nBrowser.configure(Object.assign(i18nBaseConf, {
  directory: i18nBrowserResourcesBasePath
}));

i18nInternal.configure(Object.assign(i18nBaseConf, {
  directory: i18nInternalResourcesBasePath
}));

module.exports = {
  i18nApp: i18nApp,
  i18nBrowser: i18nBrowser,
  i18nInternal: i18nInternal,
  resourceBasePath: {
    app: i18nAppResourcesBasePath,
    browser: i18nBrowserResourcesBasePath
  },
  maps: {
    'en': 'English',
    'zh-cn': '简体中文'
  }
};


