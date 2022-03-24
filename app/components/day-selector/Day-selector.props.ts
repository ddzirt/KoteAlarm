import {StyleProp, TextStyle, ViewStyle} from 'react-native';
import {TxKeyPath} from 'i18n';

export interface DayProps {
  /**
   * Name non i18n
   */
  name?: string;

  /**
   * Name
   */
  nameTx?: TxKeyPath;

  /**
   * Container style overrides.
   */
  style?: StyleProp<ViewStyle>;

  /**
   * Name style overrides.
   */
  nameStyle?: StyleProp<TextStyle>;
}

export interface DaySelectorProps {
  /**
   * Main header non i18n
   */
  title?: string;

  /**
   * Main header
   */
  titleTx?: TxKeyPath;

  /**
   * Container style overrides.
   */
  style?: StyleProp<ViewStyle>;

  /**
   * Title style overrides.
   */
  titleStyle?: StyleProp<TextStyle>;

  /**
   * Array of days to show(probably entire week)
   */
  days?: string[] | TxKeyPath[];
}
