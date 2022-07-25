import { useState } from "react";
import "./index.css";

export default function Form({ listTransactions, setListTransactions }) {
  const [description, setDescription] = useState("");
  const [type, setType] = useState("");
  const [value, setValue] = useState("");

  function handleForm() {
    type === "saida"
      ? setListTransactions([
          ...listTransactions,
          { description: description, type: type, value: -value },
        ])
      : setListTransactions([
          ...listTransactions,
          { description: description, type: type, value: value },
        ]);
  }
  return (
    <form className="Form" onSubmit={(e) => handleForm(e.preventDefault())}>
      <div className="Form--descDiv">
        <label htmlFor="descricao">Descrição</label>
        <input
          className="Form--desc"
          type="text"
          name="description"
          placeholder="Digite aqui sua descrição"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <span>Ex: compra de roupas</span>
      </div>

      <div className="Form--div">
        <div>
          <label htmlFor="valor">Valor</label>
          <input
            type="number"
            name="value"
            placeholder="1"
            value={value}
            onChange={(e) => setValue(Number(e.target.value))}
          />
        </div>

        <div>
          <label htmlFor="tipo">Tipo de valor</label>
          <select
            id=""
            name="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option className="Form--select__option" value="entrada">
              Entrada
            </option>
            <option className="Form--select__option" value="saida">
              Saída
            </option>
          </select>
        </div>
      </div>
      <button type="submit">Inserir Valor</button>
    </form>
  );
}
