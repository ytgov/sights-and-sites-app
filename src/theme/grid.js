import styled from 'styled-components/native';

// export const Container = styled.View`
// flex: 1;
// `;

export const Container = styled.ScrollView`
    flex: 1;
    width: 100%;
    height: 100%;
`;

export const Raw = styled.View`
    padding: 0 15px;
    flex-direction: row;
    alignItems: center;
    flex-wrap: wrap;
`;

export const Col = styled.View`
    width: 100%;
    alignItems: center;
    justify-content: center;
    text-align: center;
`;

export const RawNoPadding = styled.View`
    flex-direction: column;
    flex-wrap: wrap;
    alignItems: center;
`;


export const PageContent = styled.View`
    flex: 1;
    padding: 20px 0;
    background-color: red;
`;