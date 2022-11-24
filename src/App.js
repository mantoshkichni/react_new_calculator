import { useState } from "react";
import "./styles.css";

export default function App() {
  const [value, setValue] = useState("");
  const [ans, setAns] = useState("");
  const evalResult = (e) => {
    setValue(value.concat(e.target.innerText));
  };
  function clear() {
    setValue("");
    setAns("");
  }
  const submitHandler = (e) => {
    e.preventDefault();
    setAns(eval(value));
    console.log(ans);
    // setValue("");
    //just for github repository;;;
  };

  return (
    <div className="App">
      <div className="calculator">
        <form onSubmit={submitHandler}>
          <div className="inputield">
            <input
              value={value}
              type="text"
              autofocus
              onChange={(e) => setValue(e.target.value)}
            ></input>
            <div className="result">{ans}</div>
          </div>
          <div className="buttonsection">
            <button type="button" onClick={evalResult}>
              9
            </button>
            <button type="button" onClick={evalResult}>
              8
            </button>
            <button type="button" onClick={evalResult}>
              7
            </button>
            <button type="button" onClick={evalResult}>
              +
            </button>
            <button type="button" onClick={evalResult}>
              6
            </button>
            <button type="button" onClick={evalResult}>
              5
            </button>
            <button type="button" onClick={evalResult}>
              4
            </button>
            <button type="button" onClick={evalResult}>
              -
            </button>
            <button type="button" onClick={evalResult}>
              3
            </button>
            <button type="button" onClick={evalResult}>
              2
            </button>
            <button type="button" onClick={evalResult}>
              1
            </button>
            <button type="button" onClick={evalResult}>
              *
            </button>
            <button type="button" onClick={clear}>
              AC
            </button>
            <button type="button" onClick={evalResult}>
              0
            </button>
            <button type="button" onClick={evalResult}>
              .
            </button>
            <button type="button" onClick={evalResult}>
              /
            </button>
          </div>
          <button className="submitButton" type="submit">
            =
          </button>
        </form>
      </div>
    </div>
  );
}
