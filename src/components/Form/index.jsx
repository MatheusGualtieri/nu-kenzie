import "./form.css";
import "../../styles/reset.css";
import "../../styles/global.css";
import "../../styles/button.css";
import "../../styles/input.css";
import "../../styles/font.css";
import { useState } from "react";
import { useEffect } from "react";
function Form({ listTransactions, setListTransactions }) {
  const [inputValue, setInputValue] = useState(1);
  const [inputDescription, setInputDescription] = useState("");
  const [selectValue, setSelectValue] = useState("");
  let value;

  function addValue() {
    selectValue === "saída" ? (value = inputValue * -1) : (value = inputValue);
  }

  function addTransection() {
    setListTransactions([
      ...listTransactions,
      {
        description: inputDescription,
        type: selectValue,
        value: value,
      },
    ]);
  }

  return (
    <form
      className="container-form"
      onSubmit={(event) => {
        addValue();
        addTransection(event.preventDefault());
      }}
    >
      <label className="text-1" htmlFor="input-description">
        Descrição
      </label>
      <input
        type="text"
        className="input"
        placeholder="Insira a descrição"
        id="input-description"
        value={inputDescription}
        onChange={(event) => setInputDescription(event.target.value)}
      />
      <label className="text-2" htmlFor="input-description">
        Ex: Compra de roupas
      </label>
      <div className="container-value">
        <label className="text-1" htmlFor="input-value">
          Valor
        </label>
        <label className="text-1" htmlFor="input-select">
          Tipo de valor
        </label>
        <div className="input-value">
          <input
            type="number"
            className="input"
            placeholder="1"
            id="input-value"
            min={1}
            value={inputValue}
            onChange={(event) => {
              setInputValue(parseInt(event.target.value));
            }}
          />
          <p className="input">R$</p>
        </div>
        <select
          className="input-select"
          id="input-select"
          value={selectValue}
          onChange={(event) => {
            setSelectValue(event.target.value);
          }}
        >
          <option>Selecionar Entrada ou saída</option>
          <option value="saída">Saída</option>
          <option value="entrada">Entrada</option>
        </select>
      </div>
      <button type="submit" className="button button-primary">
        Inserir Valor
      </button>
    </form>
  );
}
export default Form;
