import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";
import LandingPage from "./pages/LandingPage";

function App() {
  const [listTransactions, setListTransactions] = useState([]);
  const [page, setPage] = useState(false);
  return (
    <div className="App">
      {page === false ? (
        <LandingPage setPage={setPage} />
      ) : (
        <Home
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
        />
      )}
    </div>
  );
}

export default App;
