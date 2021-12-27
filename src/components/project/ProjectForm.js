import {useEffect, useState} from 'react'
import styles from './ProjectForm.module.css'
import Select from '../form/Select'
import Input from '../form/Input'
import SubmitButton from '../form/SubmitButton'

function ProjectForm({handleSubmit, btnText, projectData}) {

    const[categories, setCategories] = useState([])
    const [project, setProject] = useState(projectData || [])

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

    const submit = (e) => {
        e.preventDefault()
        handleSubmit(project)
    }

    function handleChange(e) {
        setProject({...project, [e.target.name]: e.target.value})
    }

    function handleCategory(e) {
        setProject({
            ...project, 
            category: {
                id: e.target.value,
                name: e.target.options[e.target.selectedIndex].text,
        }})
    }

    return (
        <form onSubmit={submit} className={styles.form}>
            <Input 
                type="text" 
                text="Nome do Projeto"
                name="nome"
                placeholder="Insira o nome do projeto"
                handleOnChange = {handleChange}
                value= {project.name ? project.name: ''}
            />
            <Input 
                type="number" 
                text="Orçamento do projeto"
                name="budget"
                placeholder="Insira o orçamento total do projeto"
                handleOnChange = {handleChange}
                value= {project.budget ? project.budget: ''}
            />
            <Select
                name="category_id"
                text="Selecione a categoria"
                options={categories}
                handleOnChange = {handleCategory}
                value={project.category ? project.category.id : ''}
            />
            <div>
                <SubmitButton text={btnText} />
            </div>
        </form>
    )
}

export default ProjectForm