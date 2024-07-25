import React, { useState } from 'react';
import { Alert, Button, Pressable, Text, View } from 'react-native';

import { styles } from './styles';
import { BatTextInput } from '../batTextInput';
import generatePass from '../../services/passord';
import { setImageAsync, setStringAsync } from 'expo-clipboard';

export function BatButton() {
    const [pass, setPass] = useState('')
    const generatePassValues = () => {
        let passGenerate = generatePass();
        setPass(passGenerate)
    }
    const copyValuesGenerate = async () => {
        await setStringAsync(pass)
    }
    return (
        <>
            <BatTextInput pass={pass} />
            <Pressable style={styles.button} onPress={generatePassValues}>
                <Text style={styles.text}>GENERATE</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={copyValuesGenerate}>
                <Text style={styles.text}>⚡COPY</Text>
            </Pressable>

        </>
    );
}