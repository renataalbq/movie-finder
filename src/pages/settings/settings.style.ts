import styled from 'styled-components/native';

export const Content = styled.View`
    padding: 10px;
    margin-top: 10px;
`;


export const Title = styled.Text`
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 20px;
    color: #fff;
`;

export const Setting = styled.View`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 10px;
    width: 100%;
`;

export const SettingsOption = styled.Text`
    font-size: 16px;
    font-weight: bold;
    color: #cecece;
`;


export const ButtonLogout = styled.TouchableOpacity`
  background: #FF5523;
  width: 140px;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  padding: 10px;
  margin-top: 10px;
`

export const TextLogoutButton = styled.Text`
    font-size: 16px;
    color: #ffffff;
`
