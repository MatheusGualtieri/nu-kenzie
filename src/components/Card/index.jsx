import "./card.css";
import "../../styles/reset.css";
import "../../styles/global.css";
import "../../styles/button.css";
import "../../styles/input.css";
import "../../styles/font.css";
function Card({ transaction, removeTransaction }) {
  return (
    <div className="card">
      <h3 className="title-3">{transaction.description}</h3>
      <p className="text-1 transaction-type">{transaction.type}</p>
      <p className="text-1">R$ {Math.abs(transaction.value)}</p>
      <button
        className="button button-delete"
        onClick={() => removeTransaction(transaction)}
      >
        <i className="fa-solid fa-trash-can"></i>
      </button>
    </div>
  );
}
export default Card;
