import { Button } from "../../components/Button"
import { Container } from "./styles"
export function Home() {
  return (
    <>
    <Container>
      <header>
        <img src="http://github.com/rosendo2015.png" alt="image user" />
        <h2>Francisco Rosendo</h2>
        <p>Brasil, Fortaleza-CE</p>
        <span>"Front-end developer and avid reader."</span>
      </header>
      <main>
        <Button title="GitHub"/>
        <Button title="Frontend Mentor"/>
        <Button title="Linkedin"/>
        <Button title="Twitter"/>
        <Button title="Instagram"/>

      </main>
      
    </Container>
    <footer>
        <p>
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
        </p>
        <p>
          Coded by <a href="#">Francisco Rosendo</a>.
        </p>
      </footer>
    </>
  )
}

