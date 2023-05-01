import styled from 'styled-components/native';

export const Container = styled.View`
    flex: 1;
    background-color:#190c38;
`;

export const Poster = styled.Image`
    width: 100%;
    height: 450px;
    resize-mode: stretch;
    margin-bottom: 25px;

`;

export const InfoWrapper = styled.View`
    flex: 1;
    padding: 10px;
`;


export const CastText = styled.Text`
    font-size: 16px;
    margin-vertical: 5px
    font-weight: bold;
    color: #fff;
`;

export const TitleContent = styled.View`
    width: 100%;
    height: 30px;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 8px;
`;

export const Title = styled.Text`
    font-size: 20px;
    font-weight: bold;
    color: white;  
`;

export const ButtonsContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  gap: 30px;
`;

export const Overview = styled.Text`
    font-size: 16px;
    color: #f0f0f0;
    margin-top: 25px;  
    text-align: justify;
`;

export const InfoTitle = styled.Text`
    font-size: 12px;
    font-weight: bold;
    color: #fff;
`;

export const InfoDescription = styled.Text`
  color: #c3c3c3;
`;
