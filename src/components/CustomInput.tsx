import React from 'react';
import { View, TextInput, StyleSheet, TextInputProps } from 'react-native';
import colors from '../styles/color';

type CustomInputProps = {
  value: string;
  onChangeText: (text: string) => void;
  placeholder?: string;
  keyboardType?: TextInputProps['keyboardType'];
  secureTextEntry?: boolean;
};

const CustomInput = ({
  value,
  onChangeText,
  placeholder,
  keyboardType,
  secureTextEntry,
}: CustomInputProps) => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        placeholderTextColor={colors.gray}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    borderBottomWidth: 1,
    borderBottomColor: colors.gray,
    marginBottom: 20,
  },
  input: {
    fontSize: 16,
    paddingVertical: 0,
  },
});

export default CustomInput;
