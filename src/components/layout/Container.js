import styles from "./Container.module.css"

function Container(props) {
    return(
        //props.children redireciona a pagina pro conteudo da classe correspondente
        <div className={`${styles.container} ${styles[props.customClass]}`}>
            {props.children}
        </div>
    )
}
export default Container