import { faQrcode } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import styled from "styled-components";

export const Item = () => {
  return (
    <Container>
      <Logo icon={faQrcode} />
      <Title>| Agenda Buenos Aires |</Title>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  height: 15%;
  border-bottom: 1px solid white;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled(FontAwesomeIcon)`
  margin: 5%;
  color: white;
  font-size: 1.5rem;
`;
const Title = styled.p`
  color: white;
  font-size: 1.2rem;
  font-family: "Mitr";
  margin-right: 5%;
`;
