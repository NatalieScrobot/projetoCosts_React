import {useEffect, useState} from 'react'
import styles from './ProjectForm.module.css'
import Select from '../form/Select'
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'

function ProjectForm({btnText}) {

    const[categories, setCategories] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/categories', {
            method:'GET',
            headers: {
                'Content-type': 'application/json'
            }
        }).then((resp) => resp.json())
          .then((data) => {
            setCategories(data)
          }).catch((err)=> console.log("Ocorreu um erro"))
        
    }, [])

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
                options={categories}
            />
            <div>
                <SubmitButton text={btnText} />
            </div>
        </form>
    )
}

export default ProjectForm