import styled from "styled-components";
import FA from "../../assets/FA.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faXTwitter } from "@fortawesome/free-brands-svg-icons";
import { faMapMarker, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { Item } from "../Item/Item";

export const Info = () => {
  return (
    <>
      <InfoContainer>
        <Photo src={FA} />
        <Title>Fiestas Argentinas™</Title>
        <Paragraph>
          <Icon icon={faMapMarker} />
          ARGENTINA / Buenos Aires
        </Paragraph>
        <SocialsContainer>
          <StyledLink href='https://www.google.com'>
            <Icon icon={faInstagram} />
          </StyledLink>
          <StyledLink href='https://www.google.com'>
            <Icon icon={faXTwitter} />
          </StyledLink>
          <StyledLink href='mailto:juansegui06@gmail.com'>
            <Icon icon={faEnvelope} />
          </StyledLink>
        </SocialsContainer>
        <Divider />
      </InfoContainer>
      <PartiesContainer>
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </PartiesContainer>
    </>
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
const SocialsContainer = styled.div`
  display: flex;
  height: 5%;
  flex-direction: row;
`;
const Icon = styled(FontAwesomeIcon)`
  color: white;
`;
const StyledLink = styled.a`
  text-decoration: none;
  font-size: 1.2rem;
  padding: 4%;
`;
const Divider = styled.div`
  width: 85%;
  border: 1px solid white;
  margin-top: 5%;
  border-radius: 5px;
`;
const PartiesContainer = styled.div`
  position: absolute;
  width: 90%;
  height: 55%;
  left: 5%;
  top: 42%;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: scroll;
  background-color: rgba(0, 0, 0, 0.5);
  border-radius: 2%;
  overflow-x: hidden;
`;
