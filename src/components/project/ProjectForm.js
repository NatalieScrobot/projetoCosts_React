import styles from './ProjectForm.module.css'
import Select from '../form/Select'
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'

function ProjectForm({btnText}) {
    return (
        <form className={styles.form}>
            <Input 
                type="text" 
                text="Nome do Projeto"
                name="nome"
                placeholder="Insira o nome do projeto"
            />
            <Input 
                type="number" 
                text="Orçamento do projeto"
                name="budget"
                placeholder="Insira o orçamento total do projeto"
            />
            <Select
                name="category_id"
                text="Selecione a categoria"
            />
            <div>
                <SubmitButton text={btnText} />
            </div>
        </form>
    )
}

export default ProjectForm