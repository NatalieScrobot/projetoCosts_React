import {Link} from 'react-router-dom'
import Container from './Container'
import styles from './Navbar.module.css'
import logo from '../../components/img/costs_logo.png'

function Navbar() {
    return(
      <nav className={styles.navbar}> 
        <Container>
          <ul className={styles.list}>
            <li className={styles.item}>
              <Link to="/"><img src={logo} alt="Costs"/></Link>
            </li>
            <li className={styles.item}>
              <Link to="/">Início</Link>
            </li>
            <li className={styles.item}>
              <Link to="/projects">Projetos</Link>
            </li>
            <li className={styles.item}>
              <Link to="/newproject">Novo projeto</Link>
            </li>
            <li className={styles.item}>
              <Link to="/company">Empresa</Link>
            </li>
            <li className={styles.item}>
              <Link to="/contact">Contato</Link>
            </li>
        </ul>
        </Container>
      </nav>
    )
}
export default Navbar