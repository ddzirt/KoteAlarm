import i18n from 'i18n-js';
// import memoize from 'fast-memoize'; // TODO: Possibly remove
import * as RNLocalize from 'react-native-localize';
import {I18nManager} from 'react-native';

import en from './translations/en.json';
import ua from './translations/ua.json';

i18n.translations = {en, ua};
i18n.fallbacks = true;

export {i18n};

export const setLanguageConfig = () => {
  const fallback = {languageTag: 'en', isRTL: false};

  const {languageTag, isRTL} =
    RNLocalize.findBestAvailableLanguage(Object.keys(i18n.translations)) ||
    fallback;

  // update layout direction
  I18nManager.forceRTL(isRTL);

  // set i18n-js config
  i18n.locale = languageTag;
};

type DefaultLocale = typeof ua;
export type TxKeyPath = RecursiveKeyOf<DefaultLocale>;

type RecursiveKeyOf<TObj extends Record<string, any>> = {
  [TKey in keyof TObj & string]: TObj[TKey] extends Record<string, any>
    ? `${TKey}` | `${TKey}.${RecursiveKeyOf<TObj[TKey]>}`
    : `${TKey}`;
}[keyof TObj & string];
