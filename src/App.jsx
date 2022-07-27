import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";

function App() {
  const [listTransactions, setListTransactions] = useState([]);
  const [page, setPage] = useState(false);

  const iniciar = () => {
    setPage(true);
  };

  const finalizar = () => {
    setPage(false);
  };
  return (
    <div className="App">
      {page ? (
        <Home
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
          finalizar={finalizar}
        />
      ) : (
        <LandingPage iniciar={iniciar} />
      )}
    </div>
  );
}

export default App;
