import {StyleProp, TextStyle, ViewStyle} from 'react-native';
import {IconTypes} from '../icon/icons';
import {TxKeyPath} from 'i18n';

export interface HeaderProps {
  /**
   * Main header
   */
  headerTx?: TxKeyPath;

  /**
   * header non-i18n
   */
  headerText?: string;

  /**
   * Icon that should appear on the left
   */
  leftIcon?: IconTypes | TxKeyPath;

  /**
   * Icon left container style
   */
  leftIconContainerStyle?: StyleProp<ViewStyle>;

  /**
   * Icon left text style
   */
  leftIconTextStyle?: StyleProp<TextStyle>;

  /**
   * What happens when you press the left icon
   */
  onLeftPress?(): void;

  /**
   * Icon that should appear on the right
   */
  rightIcon?: IconTypes | TxKeyPath;

  /**
   * Icon right container style
   */
  rightIconContainerStyle?: StyleProp<ViewStyle>;

  /**
   * Icon right text style
   */
  rightIconTextStyle?: StyleProp<TextStyle>;

  /**
   * What happens when you press the right icon
   */
  onRightPress?(): void;

  /**
   * Container style overrides.
   */
  style?: StyleProp<ViewStyle>;

  /**
   * Title style overrides.
   */
  titleStyle?: StyleProp<TextStyle>;
}
