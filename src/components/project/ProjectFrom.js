import style from "./ProjectFrom.module.css";

function ProjectFrom() {
  return (
    <form>
      <div>
        <input type="text" placeholder="Insira o nome do Projeto" />
      </div>
      <div>
        <input type="mumber" placeholder="Insira o orçamento total" />
      </div>
      <div>
        <select name="category_id">
          <option disabled>Selecione a Catergoria</option>
        </select>
      </div>
      <div>
        <input type="submit" value="Cria Projeto" />
      </div>
    </form>
  );
}

export default ProjectFrom;
