import styles from "./NewProject.module.css";
import ProjectFrom from "../project/ProjectFrom";

function NewProject() {
  return (
    <div className={styles.newproject_container}>
      <h1>Cria Projeto</h1>
      <p>Crie seu projeto para depois adicionar os seus serviços</p>
      <ProjectFrom />
    </div>
  );
}

export default NewProject;
