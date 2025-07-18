import styled from 'styled-components';

const Main = styled.main`
  padding: 2rem;
  text-align: center;
`;

const Paragraph = styled.p`
  max-width: 600px;
  margin: 0 auto;
  font-size: 1.1rem;
`;

export default function MainContent() {
  return (
    <Main>
      <h2>Welcome 👋</h2>
      <Paragraph>
        This layout is built using React and styled-components. It's clean, responsive, and great for practicing component-based UI.
      </Paragraph>
    </Main>
  );
}
