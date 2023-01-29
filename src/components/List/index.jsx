import "./list.css";
import "../../styles/reset.css";
import "../../styles/global.css";
import "../../styles/button.css";
import "../../styles/input.css";
import "../../styles/font.css";
import "../Card";
import Card from "../Card";
import CardEmpty from "../CardEmpty";
function List({ listTransactions, removeTransaction }) {
  return (
    <ul className="container-list">
      <h3 className="title-3">Resumo Financeiro</h3>
      {listTransactions.length === 0 ? (
        <>
          <h2 className="title-2">Você não possui nenhum lançamento</h2>
          <li className="list-item item-negative">
            <CardEmpty></CardEmpty>
          </li>
          <li className="list-item item-negative">
            <CardEmpty></CardEmpty>
          </li>
          <li className="list-item item-negative">
            <CardEmpty></CardEmpty>
          </li>
        </>
      ) : (
        <>
          {listTransactions.map((transaction, index) =>
            transaction.value > 0 ? (
              <li className="list-item item-positive" key={index}>
                <Card
                  transaction={transaction}
                  removeTransaction={removeTransaction}
                ></Card>
              </li>
            ) : (
              <li className="list-item item-negative" key={index}>
                <Card
                  transaction={transaction}
                  removeTransaction={removeTransaction}
                ></Card>
              </li>
            )
          )}
        </>
      )}
    </ul>
  );
}

export default List;
