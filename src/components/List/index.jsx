import Card from "../Card";

import React from "react";
import "./index.css";

const List = ({ listTransactions }) => {
  return (
    <div className="List">
      <div className="List--header">
        <h3>Resumo Financeiro</h3>
        <div className="List--header__buttons">
          <button className="List--header__button List--header__todos">
            Todos
          </button>
          <button className="List--header__button List--header__entradas">
            Entradas
          </button>
          <button className="List--header__button List--header__despesas">
            Despesas
          </button>
        </div>
      </div>
      {listTransactions &&
        listTransactions.map((transaction, index) => (
          <Card transaction={transaction} key={index} />
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
