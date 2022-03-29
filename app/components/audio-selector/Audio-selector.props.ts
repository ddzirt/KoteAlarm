import {StyleProp, TextStyle, ViewStyle} from 'react-native';
import {TxKeyPath} from 'i18n';

export interface AudioSelectorProps {
  /**
   * Title non i18n
   */
  title?: string;

  /**
   * Title i18n
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
   * OnPress handler
   */
  onPress?: () => void;

  /**
   * Vibration toggle
   */
  isVibrating?: boolean;

  /**
   * Vibration handler
   */
  onVibrationPress?: (state: boolean) => void;
}
