import styled from 'styled-components/native';

export const GenreWrapper = styled.ScrollView`
    flex-direction: row;
    flex-grow: 0;
    flex-shrink: 0;
    margin-vertical: 20px;
    margin-horizontal: 5px;
`;

export const GenreText = styled.Text<{selected?: boolean}>`
    color: ${({ selected }) => selected ? '#fff' : '#101010'};
    margin-horizontal: 8px;
`;

export const GenreBadge = styled.TouchableOpacity<{selected?: boolean}>`
    border-radius: 20px;
    background-color: ${({ selected }) => selected ? '#FF5523' : 'rgba(255,255,255,0.4)'};
    padding: 5px;
    margin-horizontal: 8px
    margin-top: 20px;
`
