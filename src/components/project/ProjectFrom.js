import Input from "../form/Input";
import styles from "./ProjectFrom.module.css";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";

function ProjectFrom({ btnText }) {
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

      <Select name="categoria_id" text="Selecione a categoria" />

      <SubmitButton text={btnText} />
    </form>
  );
}

export default ProjectFrom;
