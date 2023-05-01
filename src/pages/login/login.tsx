import React, { useContext, useState } from 'react';
import {signInWithEmailAndPassword } from "firebase/auth";
import { Container, WelcomeContent, WelcomeMainText, WelcomeText } from './login.style';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../../services/firebase';
import { Form } from '../../components/form/form';
import { UserContext } from '../../store/user-context';

export const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false); 
  const navigation = useNavigation();
  const [messageError, setMessageError] = useState('');
  const { login } = useContext(UserContext);

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        login(user);
        navigation.navigate('Home')
      })
      .catch((error) => {
        setError(true)
        const errorCode = error.code;
        const errorMessage = error.message;
        setMessageError(errorMessage)
      });
  };

  const handleSignUp = () => {
    navigation.navigate('SignUp')
  }

  return (
    <Container>
      <WelcomeContent>
        <WelcomeText>Welcome to </WelcomeText>
        <WelcomeMainText>MovieFinder</WelcomeMainText>
      </WelcomeContent>
      <Form setEmail={setEmail} email={email} 
            setPassword={setPassword} password={password} 
            primaryButton="Login" secondaryButton="Register"
            secondaryText="Don't have an account?" 
            handlePrimaryFunction={handleLogin } handleSecondaryFunction={handleSignUp}
            error={error} messageError={messageError} />
    </Container>
  );
};
