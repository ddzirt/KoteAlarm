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

  /**
   * Is item highlighted
   */
  isSelected?: boolean;

  /**
   * OnPress handler
   */
  onPress?: (date: string) => void;
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

  /**
   * Array of days selected
   */
  selectedDays?: string[] | TxKeyPath[];

  /**
   * Handler for selected days
   */
  onPressDaySelected?: (date: string) => void;
}
