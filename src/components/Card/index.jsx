import { FaTrash } from "react-icons/fa";
import "./index.css";

export default function Card({ transaction }) {
  console.log(transaction);
  return (
    <div className="Card">
      <div className="Card--color"></div>
      <div className="Card--info">
        <h3 className="Card--title">{transaction.description}</h3>
        <p className="Card--type">{transaction.type}</p>
      </div>
      <div className="Card--info__value">
        <p className="Card--value">R$ {transaction.value}</p>
        <button>
          <FaTrash />
        </button>
      </div>
    </div>
  );
}
