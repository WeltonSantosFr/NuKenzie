import React from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";
import "./index.css";

const Home = ({ listTransactions, setListTransactions, finalizar }) => {
  return (
    <div className="Home">
      <Header finalizar={finalizar} />
      <Main
        listTransactions={listTransactions}
        setListTransactions={setListTransactions}
      />
    </div>
  );
};

export default Home;
