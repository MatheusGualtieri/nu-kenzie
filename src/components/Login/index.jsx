import "./login.css";
import "../../styles/reset.css";
import "../../styles/global.css";
import "../../styles/button.css";
import "../../styles/input.css";
import "../../styles/font.css";
function Login({ handleLogin }) {
  return (
    <div className="container-login">
      <h2 className="title-2 dark">
        <span>Nu</span> Kenzie
      </h2>
      <h1 className="title-1 dark">Centralize o controle das suas finanças</h1>
      <p className="text-2dark ">de forma rápida e segura</p>
      <button className="button button-primary" onClick={() => handleLogin()}>
        Iniciar
      </button>
    </div>
  );
}
export default Login;
