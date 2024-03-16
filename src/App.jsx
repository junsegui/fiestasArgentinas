import Container from "./Components/container/Container";
import { Info } from "./Components/info/Info";
import { Video } from "./Components/video/video";
export default function App() {
  return (
    <Container>
      <Video />
      <Info />
    </Container>
  );
}
