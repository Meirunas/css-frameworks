import GlobalStyle from "./styles/GlobalStyle";
import Header from "./components/Header";
import MainContent from "./components/MainContent";
import Footer from "./components/Footer";
import styled from "styled-components";

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Main = styled.main`
  flex: 1; /* push footer down */
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <LayoutWrapper>
        <Header />
        <Main>
          <MainContent />
        </Main>
        <Footer />
      </LayoutWrapper>
    </>
  );
}

export default App;
