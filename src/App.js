import { BrowserRouter as Router, Route, Routes, Link} from 'react-router-dom'
import Home from './components/pages/Home'
import Contact from './components/pages/Contact';
import Company from './components/pages/Company';
import NewProject from './components/pages/NewProject';
import Container from './components/layout/Container';


function App() {
  return (
    <Router>
      <ul>
        <Link to="/">Início</Link>
        <Link to="/contact">Contato</Link>
        <Link to="/company">Empresa</Link>
        <Link to="/newproject">Novo projeto</Link>
      </ul>
      <p>Footer</p>
      <Container customClass="min-height">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/contact" element={ <Contact />} />
          <Route path="/company" element={ <Company />} />
          <Route path="/newproject" element={ <NewProject />} />
        </Routes>
      </Container>
    </Router>
  );
}
export default App;
