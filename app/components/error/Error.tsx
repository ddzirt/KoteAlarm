import React from 'react';
import {View, ScrollView} from 'react-native';
import {Button, Icon, Text} from '../index';
import {ErrorProps} from './Error.props';
import {
  CONTAINER,
  ICON,
  TITLE_ERROR,
  FRIENDLY_SUBTITLE,
  ERROR_DETAILS_CONTAINER,
  CONTENT_ERROR,
  BTN_RESET,
} from './Error.style';

export const Error = (props: ErrorProps) => {
  return (
    <View style={CONTAINER}>
      <Icon style={ICON} icon="bug" />
      <Text style={TITLE_ERROR} tx={'errorScreen.title'} />
      <Text style={FRIENDLY_SUBTITLE} tx={'errorScreen.friendlySubtitle'} />
      <View style={ERROR_DETAILS_CONTAINER}>
        <ScrollView>
          <Text selectable style={CONTENT_ERROR} text={`${props.error}`} />
          <Text
            selectable
            // style={CONTENT_BACKTRACE}
            text={`${props.errorInfo.componentStack}`}
          />
        </ScrollView>
      </View>
      <Button
        style={BTN_RESET}
        onPress={props.onReset}
        tx="errorScreen.reset"
      />
    </View>
  );
};
