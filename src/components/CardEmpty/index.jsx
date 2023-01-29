import "./cardEmpty.css";
import "../../styles/reset.css";
import "../../styles/global.css";
import "../../styles/button.css";
import "../../styles/input.css";
import "../../styles/font.css";
function CardEmpty({ transaction, removeTransaction }) {
  return (
    <div className="card-empty">
      <div className="grey div-1"></div>
      <div className="grey div-2"></div>
    </div>
  );
}
export default CardEmpty;
