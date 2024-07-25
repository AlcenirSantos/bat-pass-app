import React from 'react';
import { Image, Text, View } from 'react-native';

import { styles } from './styles';
import BatLogoImage from '../../../assets/bat-logo.png'

export function BatLogo() {
  return (
    <View>
        <Text style={styles.title}>
            Bat Pass Generator
        </Text>
        <Image style={styles.logo} source={BatLogoImage} />
    </View>
  );
}