import React from "react";
import Header from "../../components/Header";
import Main from "../../components/Main";
import "./index.css";

const Home = ({ listTransactions, setListTransactions }) => {
  return (
    <div className="Home">
      <Header />
      <Main
        listTransactions={listTransactions}
        setListTransactions={setListTransactions}
      />
    </div>
  );
};

export default Home;
