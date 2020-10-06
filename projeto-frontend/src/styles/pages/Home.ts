import styled from 'styled-components';

export const Container = styled.div`
  height: 900px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-size: 54px;
    color: ${props => props.theme.colors.primary};
    margin: -80px 0px 38px 0px;
  }
`;
