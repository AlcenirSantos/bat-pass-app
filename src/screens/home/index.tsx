import { StatusBar } from 'expo-status-bar';
import React from "react";
import { Text, View } from "react-native";
import { styles } from "./style";
import { BatLogo } from '../../components/batLogo';
import { BatTextInput } from '../../components/batTextInput';
import { BatButton } from '../../components/batButton';

export default function Home() {
    return (
        <View style={styles.appContainer}>
            <View style={styles.logoContainer}>
                <BatLogo />
            </View>
            <View style={styles.inputContainer}>
                
                <BatButton />
            </View>
            <StatusBar style="light" />
        </View>
    )
}

