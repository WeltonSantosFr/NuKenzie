import React from "react";

import "./index.css";

const TotalMoney = ({ listTransactions }) => {
  console.log(typeof listTransactions[0].value);
  return (
    <div className="TotalMoney">
      <div className="TotalMoney--info">
        <h3>Valor Total:</h3>
        <p className="TotalMoney--desc">O valor refere-se ao saldo</p>
      </div>
      <div>
        <p className="TotalMoney--value">
          {listTransactions.length > 0
            ? listTransactions.reduce(
                (acc, atual) =>
                  atual.type === "entrada"
                    ? acc + atual.value
                    : acc - atual.value,
                0
              )
            : 0}
        </p>
      </div>
    </div>
  );
};

export default TotalMoney;
