import React from "react";
import Form from "../Form";
import List from "../List";
import TotalMoney from "../TotalMoney";

import "./index.css";

const Main = ({ listTransactions, setListTransactions }) => {
  return (
    <div className="Main">
      <div className="Main--FormValue">
        <Form
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
        />
        {listTransactions.length > 0 ? (
          <TotalMoney listTransactions={listTransactions} />
        ) : (
          <div></div>
        )}
      </div>
      <List
        listTransactions={listTransactions}
        setListTransactions={setListTransactions}
      />
    </div>
  );
};

export default Main;
