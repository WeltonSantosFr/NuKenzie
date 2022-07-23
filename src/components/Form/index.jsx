import "./index.css";

export default function Form({ listTransactions, setListTransactions }) {
  return (
    <form className="Form">
      <div className="Form--descDiv">
        <label htmlFor="descricao">Descrição</label>
        <input
          className="Form--desc"
          type="text"
          name="descricao"
          placeholder="Digite aqui sua descrição"
        />
        <span>Ex: compra de roupas</span>
      </div>

      <div className="Form--div">
        <div>
          <label htmlFor="valor">Valor</label>
          <input type="number" name="valor" placeholder="Valor" />
        </div>

        <div>
          <label htmlFor="tipo">Tipo de valor</label>
          <select id="" name="tipo">
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
