import { useState } from "react";
import Card from "../Card";

import "./index.css";

const List = ({ listTransactions, setListTransactions }) => {
  const [filtro, setFiltro] = useState([]);
  function filtraTodos() {
    setFiltro([]);
  }

  function filtraEntradas() {
    setFiltro(
      listTransactions.filter(
        (transaction) =>
          transaction.type === "entrada" || transaction.type === undefined
      )
    );
  }

  function filtraSaidas() {
    setFiltro(
      listTransactions.filter((transaction) => transaction.type === "saida")
    );
  }
  function deleteTransaction(transaction) {
    const filteredTransactions = listTransactions.filter(
      (Transaction) => Transaction !== transaction
    );
    setListTransactions(filteredTransactions);
  }
  return (
    <div className="List">
      <div className="List--header">
        <h3>Resumo Financeiro</h3>
        <div className="List--header__buttons">
          <button
            className="List--header__button List--header__todos"
            onClick={filtraTodos}
          >
            Todos
          </button>
          <button
            className="List--header__button List--header__entradas"
            onClick={filtraEntradas}
          >
            Entradas
          </button>
          <button
            className="List--header__button List--header__despesas"
            onClick={filtraSaidas}
          >
            Despesas
          </button>
        </div>
      </div>
      {filtro.length > 0
        ? filtro.map((transaction, index) => (
            <Card
              transaction={transaction}
              key={index}
              deleteTransaction={deleteTransaction}
            />
          ))
        : listTransactions.map((transaction, index) => (
            <Card
              transaction={transaction}
              key={index}
              deleteTransaction={deleteTransaction}
            />
          ))}
      {listTransactions.length === 0 && (
        <div className="List--noTransactions">
          <p>Você ainda não possui nenhum lançamento</p>
        </div>
      )}
    </div>
  );
};

export default List;
