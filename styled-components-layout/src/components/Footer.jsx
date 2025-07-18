
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #e5e7eb;
  color: #374151;
  padding: 1rem 2rem;
  text-align: center;
`;

export default function Footer() {
  return (
    <FooterContainer>
      <small>© 2025 My Styled Site. All rights reserved.</small>
    </FooterContainer>
  );
}