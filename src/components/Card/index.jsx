import { FaTrash } from "react-icons/fa";
import "./index.css";

export default function Card({ transaction, deleteTransaction }) {
  return (
    <div className="Card">
      <div className="Card--info">
        <div
          className={
            transaction.type === "entrada" || transaction.type === undefined
              ? "Card--color__entrada"
              : "Card--color__saida"
          }
        ></div>
        <div>
          <h3 className="Card--title">{transaction.description}</h3>
          <p className="Card--type">
            {transaction.type === undefined ? "entrada" : transaction.type}
          </p>
        </div>
      </div>
      <div className="Card--info__value">
        <p className="Card--value">R$ {transaction.value}</p>
        <button onClick={() => deleteTransaction(transaction)}>
          <FaTrash />
        </button>
      </div>
    </div>
  );
}
