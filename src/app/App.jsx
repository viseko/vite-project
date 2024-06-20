import { Footer } from "../widgets/Footer"
import { Header } from "../widgets/Header"
import useVh from "./hooks/useVh"

import "./styles/index.scss"
import "./ui/App.scss"

function App() {
  const vh = useVh();

  return (
    <div className="app" style={{
      "--vh": `${vh}px`
    }}>
      <Header className="app__header"/>
      <main className="app__main">
        <div className="container">
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default App
