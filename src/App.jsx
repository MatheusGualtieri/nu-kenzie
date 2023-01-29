import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import List from "./components/List";
import TotalMoney from "./components/TotalMoney";
import Header from "./components/Header";
import Login from "./components/Login";
function App() {
  const [listTransactions, setListTransactions] = useState([]);
  const [isLogged, setIsLogged] = useState(false);

  function handleLogin() {
    setIsLogged(true);
  }
  function handleLogout() {
    setIsLogged(false);
  }
  function removeTransaction(item) {
    setListTransactions(
      listTransactions.filter((transaction) => transaction != item)
    );
  }
  return (
    <div className="App">
      {isLogged === true ? (
        <>
          <header>
            <Header handleLogout={handleLogout}></Header>
          </header>
          <main>
            <div className="container">
              <div className="container-transactions">
                <Form
                  listTransactions={listTransactions}
                  setListTransactions={setListTransactions}
                ></Form>
                <TotalMoney listTransactions={listTransactions}></TotalMoney>
              </div>
              <List
                listTransactions={listTransactions}
                removeTransaction={removeTransaction}
              ></List>
            </div>
          </main>
        </>
      ) : (
        <>
          <main className="main">
            <div className="container">
              <Login handleLogin={handleLogin}></Login>
            </div>
          </main>
        </>
      )}
    </div>
  );
}

export default App;
