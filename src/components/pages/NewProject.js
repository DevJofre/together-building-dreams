import { useNavigate } from "react-router-dom";

import styles from "./NewProject.module.css";
import ProjectFrom from "../project/ProjectFrom";

function NewProject() {
  const navigate = useNavigate();

  function createPost(project) {
    project.cost = 0;
    project.services = [];

    fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        //redirect
        navigate("/projects", { message: "Projeto criado com sucesso!" });
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className={styles.newproject_container}>
      <h1>Cria Projeto</h1>
      <p>Crie seu projeto para depois adicionar os seus serviços</p>
      <ProjectFrom handleSubmit={createPost} btnText="Cria Projeto" />
    </div>
  );
}

export default NewProject;
