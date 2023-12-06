
import React, { useState } from 'react';
import { Text, View, Button ,TextInput} from 'react-native';

const generateRandomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const generateCaptcha = () => {
  const num1 = generateRandomNumber(1, 10);
  const num2 = generateRandomNumber(1, 10);
  const result = num1 + num2;
  return { text: `${num1} + ${num2} = ?`, answer: result };
};

const GenerateCaptcha = () => {
  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [userAnswer, setUserAnswer] = useState('');
  const [message, setMessage] = useState('');

  const checkCaptcha = () => {
    if (parseInt(userAnswer, 10) === captcha.answer) {
      setMessage('CAPTCHA is correct!');
    } else {
      setMessage('CAPTCHA is incorrect. Try again.');
    }
  };

  const refreshCaptcha = () => {
    setCaptcha(generateCaptcha());
    setUserAnswer('');
    setMessage('');
  };

  return (
    <View>
      <Text>{captcha.text}</Text>
      <TextInput
        value={userAnswer}
        onChangeText={(text) => setUserAnswer(text)}
        keyboardType="numeric"
      />
      <Button title="Check CAPTCHA" onPress={checkCaptcha} />
      <Text>{message}</Text>
      <Button title="Refresh CAPTCHA" onPress={refreshCaptcha} />
    </View>
  );
};

export default GenerateCaptcha;
