import { MaterialCommunityIcons } from '@expo/vector-icons';
import React from 'react';
import { Title } from '../header/header.style';
import { Input } from '../input/input';
import { HView, VSeparator } from '../layout/layout';
import { Content, ButtonContainer, ErrorMessage, TextPrimaryButton, SecondaryContainer, TextSecondaryButton, TextSecondary, SecondaryButton } from './form.style';

interface FormProps{
    title?: string;
    setEmail: (text: string) => void;
    email: string;
    setPassword: (text: string) => void;
    password: string;
    primaryButton: string;
    secondaryButton: string;
    secondaryText: string;
    handlePrimaryFunction: () => void;
    handleSecondaryFunction: () => void;
    error?: boolean;
    messageError?: string;
}

export const Form: React.FC<FormProps> = (props) => {
    return (
      <Content>
        <Title>{props.title}</Title>
        <VSeparator />
        <Input
          placeholder="Email"
          onChangeText={(text) => props.setEmail(text)}
          value={props.email}
        />
        <Input
          placeholder="Password"
          onChangeText={(text) => props.setPassword(text)}
          value={props.password}
          secureTextEntry
        />
        <VSeparator />
        <ButtonContainer onPress={props.handlePrimaryFunction}>
            <TextPrimaryButton>{props.primaryButton}</TextPrimaryButton>
        </ButtonContainer>

        <SecondaryContainer>
          <TextSecondary>
            {props.secondaryText}
          </TextSecondary>

          <SecondaryButton 
            onPress={props.handleSecondaryFunction}
          >
            <TextSecondaryButton>
            {props.secondaryButton}
            </TextSecondaryButton>
          </SecondaryButton>
        </SecondaryContainer>
      <VSeparator />
      {props.error ?
      <HView>
        <MaterialCommunityIcons 
            name="alert-circle"
            size={20}
            color="#bdbdbd"
        />
        <ErrorMessage>{props.messageError ? props.messageError : 'Invalid email or password'}</ErrorMessage>
      </HView> :
      <></>
      }
      </Content>
    );
}