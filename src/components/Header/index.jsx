import "./header.css";
import "../../styles/reset.css";
import "../../styles/global.css";
import "../../styles/button.css";
import "../../styles/input.css";
import "../../styles/font.css";

function Header({ handleLogout }) {
  return (
    <nav className="container container-nav">
      <h2 className="title-2">
        <span>Nu</span> Kenzie
      </h2>
      <button className="button button-logout" onClick={() => handleLogout()}>
        Início
      </button>
    </nav>
  );
}
export default Header;
