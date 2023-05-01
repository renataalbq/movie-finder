import { Platform, StatusBar } from 'react-native';
import styled from 'styled-components/native';

const isAndroid = Platform.OS === "android";

export const HeaderWrapper = styled.View`
  margin-top: ${isAndroid ? `${StatusBar.currentHeight}px` : '0'};
`;

export const Row = styled.View`
  flex-direction: row;
  justify-content: center;
`

export const Title = styled.Text`
    color: #fff;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
    padding-top: 10px;
`;

export const Divider = styled.View`
  width: 100%;
  height: 1px;
  background-color: #c3c3c3;
`;