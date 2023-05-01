import styled from 'styled-components/native';
import { Platform } from "react-native";
import { FlexAlignType } from 'react-native';

const isAndroid = Platform.OS === "android";

interface ViewProps {
  hAlign?: FlexAlignType;
  vAlign?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around' | 'space-evenly';
}

export const Container = styled.SafeAreaView`
    flex: 1;
    background-color:#190c38;
    margin-top: ${isAndroid ? '5px' : '0'};
`;

export const HView = styled.View<ViewProps>`
    flex-direction: row;
    align-content: flex-start;
`;

export const VView = styled.View<ViewProps>`
  justify-content: ${({ vAlign }) => vAlign || 'flex-start'};
  align-items: ${({ hAlign }) => hAlign || 'stretch'};
  padding-horizontal: 16px;
`

export const VSeparator = styled.View`
  height: 16px;
`;

export const HSeparator = styled.View`
  width: 16px;
`;


interface HViewItemProps extends ViewProps {
  wrap?: boolean;
}

const flex = (props: HViewItemProps) => {
  return !props.wrap ? 'flex: 1' : '';
};

export const HViewItem = styled.View<HViewItemProps>`
  ${flex}
  justify-content: ${({ vAlign }) => vAlign || 'flex-start'};
  align-items: ${({ hAlign }) => hAlign || 'stretch'};
`;

