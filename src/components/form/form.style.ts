import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
    justify-content: center;
    flex: 1;
    background-color: #190c38;
`;

export const Content = styled.View`
  gap: 15px;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
`

export const ButtonContainer = styled.TouchableOpacity`
  background: #FF5523;
  width: 140px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 10px;
  margin-top: 10px;
`

export const TextPrimaryButton = styled.Text`
    font-size: 16px;
    color: #ffffff;
`

export const SecondaryContainer = styled.View`
  align-items: center;
  justify-content: center;
  margin-top: 24px;
`;

export const TextSecondary = styled.Text`
    color: #cecece;
    font-size: 12px;
`;

export const SecondaryButton = styled.TouchableOpacity`
  margin-top: 8px;
`;

export const TextSecondaryButton = styled.Text`
    color: #FF5523;
    font-weight: bold;
    font-size: 14px;
`;

export const ErrorMessage = styled.Text`
  color: #FF0000;
  font-size: 14px;
  padding:2px
`;