import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: #111827;
  color: white;
  padding: 1rem 2rem;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 1.8rem;
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Title>Styled Components Layout</Title>
    </HeaderContainer>
  );
}
