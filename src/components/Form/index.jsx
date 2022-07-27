import { useState } from "react";
import "./index.css";

export default function Form({ listTransactions, setListTransactions }) {
  const [description, setDescription] = useState("");
  const [type, setType] = useState();
  const [value, setValue] = useState("");

  function handleForm() {
    const transaction = {
      description,
      value,
      type,
    };

    setListTransactions([...listTransactions, transaction]);
  }

  return (
    <div className="Form">
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
            name="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
          >
            <option value="selecione">Selecione um tipo</option>
            <option className="Form--select__option" value="entrada">
              Entrada
            </option>
            <option className="Form--select__option" value="saida">
              Saída
            </option>
          </select>
        </div>
      </div>
      <button onClick={handleForm}>Inserir Valor</button>
    </div>
  );
}
