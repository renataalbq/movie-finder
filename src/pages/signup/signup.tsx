import React, { useState } from 'react';
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Container } from './signup.style';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../../services/firebase';
import { Form } from '../../components/form/form';

export const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();
  const [error, setError] = useState(false);
  const [messageError, setMessageError] = useState('');
  
  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        navigation.navigate('Login')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(true);
        setMessageError(errorMessage);
      });

  };

  const handleLogin = () => {
    navigation.navigate('Login')
  }

  return (
    <Container>
      <Form title="Sign Up" setEmail={setEmail} email={email} 
            setPassword={setPassword} password={password} 
            primaryButton="Register" secondaryButton="Login"
            secondaryText="Already register?" 
            handlePrimaryFunction={handleSignUp}
            handleSecondaryFunction={handleLogin}
            messageError={messageError}
            error={error}
             />
    </Container>
  );
};
