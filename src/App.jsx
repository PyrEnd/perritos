import 'bootstrap/dist/css/bootstrap.min.css'
import Header from "./componentes/Header.jsx"
import Grilla from "./componentes/Grilla.jsx"
import Tags from "./componentes/Tags.jsx"
import Footer from './componentes/Footer.jsx'

function App() {
  return (
    <>
      <Header titulo="Adopta un perrito" />
      <Grilla />
      <Footer />
    </>
  )
}

export default App;