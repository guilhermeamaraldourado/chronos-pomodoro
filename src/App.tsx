import "./styles/theme.css";
import "./styles/global.css";
import { Container } from "./components/Container";
import { Heading } from "./components/Heading";

export function App() {
  return (
    <>
      {/* <div className='container-fluid'> */}

      <Container>
        <Heading>Meu Header</Heading>
      </Container>
      <Container>
        <section>MENU</section>
      </Container>
      {/* </div> */}
    </>
  );
}
