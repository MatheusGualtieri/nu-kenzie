import "./totalMoney.css";
import "../../styles/reset.css";
import "../../styles/global.css";
import "../../styles/button.css";
import "../../styles/input.css";
import "../../styles/font.css";

function TotalMoney({ listTransactions }) {
  return (
    <div className="container-total-value">
      <label htmlFor="total-label" className="title-3">
        Valor Total
      </label>
      <p className="title-3" id="total-value">
        R${" "}
        {parseInt(
          listTransactions.reduce((value, newValue) => {
            return parseInt(value) + parseInt(newValue.value);
          }, 0)
        )}
      </p>
      <label htmlFor="total-label" className="text-2">
        O valor se refere ao saldo
      </label>
    </div>
  );
}
export default TotalMoney;
