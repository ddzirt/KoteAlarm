import React from 'react';
import {TextStyle, View, ViewProps, ViewStyle} from 'react-native';
import {LineHeader, TextField, TextFieldProps} from 'components';
import {TxKeyPath} from 'i18n';
import {spacing} from 'theme';

const VIEW_CONTAINER: ViewStyle = {
  marginHorizontal: spacing[1],
  //   borderWidth: 2,
};

const TEXT_CONTAINER: TextStyle = {
  marginLeft: spacing[2],
};

export interface TitleEditorProps extends ViewProps, TextFieldProps {
  title?: string;
  titleTx?: TxKeyPath;
}

/**
 * Alarm name editor
 */
export function TitleEditor(props: TitleEditorProps) {
  const {title, titleTx, style, placeholder} = props;
  return (
    <View style={[VIEW_CONTAINER, style]}>
      <LineHeader text={title} tx={titleTx} />
      <TextField style={TEXT_CONTAINER} placeholder={placeholder} />
    </View>
  );
}
