import styled from 'styled-components/native';
import { Platform, StatusBar } from "react-native";

const isAndroid = Platform.OS === "android";

interface ViewProps {
  center?: boolean;
  between?: boolean;
}

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color:#190c38;
    margin-top: ${isAndroid ? '5px' : '0'};
`;

export const HView = styled.View<ViewProps>`
    flex-direction: row;
    ${({ center }) => center && 'align-items: center'};
    ${({ between }) => between && 'justify-content: space-between'};
`;

export const VView = styled.View<ViewProps>`
    justify-content: ${({ center }) => center ? 'center' : 'flex-start'};
    align-items: ${({ center }) => center ? 'center' : 'stretch'};
    padding-horizontal: 16px;
`

export const VSeparator = styled.View`
  height: 16px;
`;

export const HSeparator = styled.View`
  width: 16px;
`;
