import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import { styles } from './LoginScreen.styles';

const LoginScreen = () => {
  const [phone, setPhone] = useState('');
  const [code, setCode] = useState('');
  const [keepLoggedIn, setKeepLoggedIn] = useState(false);

  const handleSendCode = () => {
    console.log(`Sending code to +82${phone}`);
  };

  const handleVerifyCode = () => {
    console.log(`Verifying code: ${code}`);
  };

  const handleLogin = () => {
    console.log('logging in...');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Ilson</Text>

      <View style={styles.row}>
        <Text style={styles.label}>전화번호</Text>
        <View style={styles.inputRow}>
          <Text style={styles.prefix}>+ 82</Text>
          <TextInput
            style={styles.input}
            keyboardType="phone-pad"
            value={phone}
            onChangeText={setPhone}
          />
          <TouchableOpacity style={styles.sendButton} onPress={handleSendCode}>
            <Text style={styles.buttonText}>전송</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.row}>
        <Text style={styles.label}>인증번호 입력</Text>
        <View style={styles.inputRow}>
          <TextInput
            style={[styles.input, styles.extraFlex]}
            keyboardType="number-pad"
            value={code}
            onChangeText={setCode}
          />
          <TouchableOpacity style={styles.sendButton} onPress={handleVerifyCode}>
            <Text style={styles.buttonText}>확인</Text>
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.checkboxContainer}>
        <CheckBox
          value={keepLoggedIn}
          onValueChange={setKeepLoggedIn}
        />
        <Text style={styles.checkboxLabel}>다음부터 로그인 건너뛰기</Text>
      </View>

      <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
        <Text style={styles.loginButtonText}>로그인</Text>
      </TouchableOpacity>

      <Text style={styles.signupText}>
        계정이 없으신가요? <Text style={styles.signupLink}>계정 만들기</Text>
      </Text>
    </View>
  );
};

export default LoginScreen;
