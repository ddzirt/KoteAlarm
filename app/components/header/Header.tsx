import React from 'react';
import {View, ViewStyle, TextStyle} from 'react-native';
import {HeaderProps} from './Header.props';
import {Button} from '../button/Button';
import {Text} from '../text/Text';
import {Icon} from '../icon/Icon';
import {color, spacing} from '../../theme';
import {translate} from 'i18n/';

import {HEADER, HEADER_TITLE} from './Header.preset';

// static styles
const ROOT: ViewStyle = {
  flexDirection: 'row',
  paddingHorizontal: spacing[4],
  alignItems: 'center',
  paddingTop: spacing[5],
  paddingBottom: spacing[5],
  justifyContent: 'flex-start',
  backgroundColor: color.background,
};
const TITLE: TextStyle = {textAlign: 'center'};
const TITLE_MIDDLE: ViewStyle = {flex: 1, justifyContent: 'center'};
const LEFT: ViewStyle = {width: 32};
const RIGHT: ViewStyle = {width: 32};

/**
 * Header that appears on many screens. Will hold navigation buttons and screen title.
 */
export function Header(props: HeaderProps) {
  const {
    onLeftPress,
    onRightPress,
    rightIcon,
    leftIcon,
    headerText,
    headerTx,
    style,
    titleStyle,
  } = props;
  const header = headerText || (headerTx && translate(headerTx)) || '';

  return (
    <>
      <View style={[ROOT, HEADER, style]}>
        {leftIcon ? (
          <Button preset="link" onPress={onLeftPress}>
            <Icon icon={leftIcon} />
          </Button>
        ) : (
          <View style={LEFT} />
        )}
        <View style={TITLE_MIDDLE}>
          <Text style={[TITLE, HEADER_TITLE, titleStyle]} text={header} />
        </View>
        {rightIcon ? (
          <Button preset="link" onPress={onRightPress}>
            <Icon icon={rightIcon} />
          </Button>
        ) : (
          <View style={RIGHT} />
        )}
      </View>
    </>
  );
}
