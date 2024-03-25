import styled from "styled-components";
import vid from "../../assets/vid.mp4";

export const Video = () => {
  return <Vid src={vid} autoPlay loop muted type='video/mp4' />;
};

const Vid = styled.video`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
