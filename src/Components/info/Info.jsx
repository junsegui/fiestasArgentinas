import styled from "styled-components";
import FA from "../../assets/FA.png";

export const Info = () => {
  return (
    <InfoContainer>
      <Photo src={FA} />
      <Title>Fiestas Argentinas™</Title>
      <Paragraph>ARGENTINA</Paragraph>
    </InfoContainer>
  );
};

const InfoContainer = styled.div`
  position: absolute;
  width: 90%;
  height: 45%;
  left: 5%;
  top: 2%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Photo = styled.img`
  width: 30%;
  border-radius: 60%;
  border: 2px solid white;
`;
const Title = styled.h1`
  color: white;
  font-family: "Mitr";
  font-weight: 00;
  height: 5%;
`;
const Paragraph = styled.p`
  color: white;
  font-family: "Mitr";
`;
