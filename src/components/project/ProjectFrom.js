import { useEffect, useState } from "react";

import Input from "../form/Input";
import styles from "./ProjectFrom.module.css";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";
import axios from "axios";

function ProjectFrom({ handleSubmit, btnText, projectData }) {
  const [categories, setCategories] = useState([]);
  const [project, setProject] = useState(projectData || {});
  useEffect(() => {
    axios
      .get("http://localhost:5000/categories")
      .then((data) => {
        setCategories(data?.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const submit = (e) => {
    e.preventDefault();
    handleSubmit(project);
  };

  function handleChange(e) {
    setProject({ ...project, [e.target.name]: e.target.value });
  }

  function handleCategory(e) {
    setProject({
      ...project,
      category: {
        id: e.target.value,
        name: e.target.options[e.target.selectedIndex].text,
      },
    });
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Nome do Projeto"
        name="name"
        placeholder="Insira o nome do projeto"
        handleOnChange={handleChange}
        value={project.name ? project.name : ""}
      />

      <Input
        type="number"
        text="Orçamento do Projeto"
        name="budget"
        placeholder="Insira o orçamento total"
        handleOnChange={handleChange}
        value={project.budget ? project.budget : "ERRO"}
      />

      <Select
        name="categoria_id"
        text="Selecione a categoria"
        options={categories}
        handleOnChange={handleCategory}
        value={project.category ? project.category.id : "erro"}
      />

      <SubmitButton text={btnText} />
    </form>
  );
}

export default ProjectFrom;
