import { useEffect, useState } from "react";

import Input from "../form/Input";
import styles from "./ProjectFrom.module.css";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";
import axios from "axios";

function ProjectFrom({ handleSubmit, btnText, projetoData }) {
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

  return (
    <form className={styles.form}>
      <Input
        type="text"
        text="Nome do Projeto"
        name="name"
        placeholder="Insira o nome do projeto"
      />

      <Input
        type="number"
        text="Orçamento do Projeto"
        name="budget"
        placeholder="Insira o orçamento total"
      />

      <Select
        name="categoria_id"
        text="Selecione a categoria"
        options={categories}
      />

      <SubmitButton text={btnText} />
    </form>
  );
}

export default ProjectFrom;
