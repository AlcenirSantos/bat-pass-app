import React from 'react';
import { View, TextInput } from 'react-native';

import { styles } from './styles';

interface Props {
  pass: string,
}

export function BatTextInput({pass}: Props) {
  return (
        <TextInput style={styles.input} placeholder='Pass' value={pass} />
  );
}