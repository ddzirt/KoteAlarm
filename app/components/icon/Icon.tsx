import * as React from 'react';
import {View, ImageStyle} from 'react-native';
import {AutoImage as Image} from '../auto-image/Auto-image';
import {IconProps} from './icon.props';
import {icons} from './icons';

const ROOT: ImageStyle = {
  resizeMode: 'contain',
};

export function Icon(props: IconProps) {
  const {style: styleOverride, icon, containerStyle} = props;

  return (
    <View style={containerStyle}>
      <Image
        style={[ROOT, styleOverride]}
        // ?: To prevent ts warning over undefined as index type
        source={icon === undefined ? undefined : icons[icon]}
      />
    </View>
  );
}
