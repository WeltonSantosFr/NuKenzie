import { FaTrash } from "react-icons/fa";
import "./index.css";

export default function Card({ transaction, deleteTransaction }) {
  return transaction.type === "entrada" ? (
    <div className="Card">
      <div className="Card--info">
        <div className="Card--color__entrada"></div>
        <div>
          <h3 className="Card--title">{transaction.description}</h3>
          <p className="Card--type">{transaction.type}</p>
        </div>
      </div>
      <div className="Card--info__value">
        <p className="Card--value">R$ {transaction.value}</p>
        <button onClick={() => deleteTransaction(transaction)}>
          <FaTrash />
        </button>
      </div>
    </div>
  ) : (
    <div className="Card">
      <div className="Card--info">
        <div className="Card--color__saida"></div>
        <div>
          <h3 className="Card--title">{transaction.description}</h3>
          <p className="Card--type">{transaction.type}</p>
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
