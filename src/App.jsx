import { useState } from "react";
import "./App.css";
import Home from "./pages/Home";

function App() {
  const [listTransactions, setListTransactions] = useState([]);
  return (
    <div className="App">
      <Home
        listTransactions={listTransactions}
        setListTransactions={setListTransactions}
      />
    </div>
  );
}

export default App;
