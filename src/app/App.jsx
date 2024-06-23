import { Footer } from "../widgets/Footer"
import { Header } from "../widgets/Header"
import useVh from "./hooks/useVh"

import "./styles/index.scss"
import "./ui/App.scss";

function SomeShit () {
  return <div>

    <h1>KLWKLE</h1>
  </div>
};

function App() {
  const vh = useVh();
  let a = 1

  return (
    <div className="app" style={{
      "--vh": `${vh}px`
    }}>
      <Header className="app__header"/>
      <main className="app__main">
        <div className="container">
          { a > 0 && <SomeShit />}
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
