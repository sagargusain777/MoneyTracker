import "./App.css";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [datetime, setDatetime] = useState("");
  const [description, setDescription] = useState("");
  function addNewTranscation(ev){
    ev.preventDefault();
    const url = import.meta.env.VITE_API_URL;
    console.log(url);

  }

  return (
    <main>
      <h1>
        $400<span>.00</span>
      </h1>
      <form onSubmit={addNewTranscation}>
        <div className="basic">
          <input
            type="text"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
            placeholder={"+200 Samsung Tv"}
          />
          <input
            type="datetime-local"
            value={datetime}
            onChange={(ev) => setDatetime(ev.target.value)}
          ></input>
        </div>
        <div className="description">
          <input
            type="text"
            value={description}
            onChange={(ev) => setDescription(ev.target.value)}
            placeholder={"Description"}
          />
        </div>
        <button type="submit">Add New Transaction</button>
      </form>

      <div className="transactions">
        <div
          className="transaction
        "
        >
          <div className="left">
            <div className="title"> Samsung Tv</div>
            <div className="description">Time For New Samsung Tv</div>
          </div>
          <div className="right">
            <div className="price red">-$500.00</div>
            <div className="datetime">2024-02-06 15:65</div>
          </div>
        </div>

        <div
          className="transaction
        "
        >
          <div className="left">
            <div className="title"> GiG JOB WEBSITE</div>
            <div className="description">Time For New Samsung Tv</div>
          </div>
          <div className="right">
            <div className="price green">+$200.00</div>
            <div className="datetime">2024-02-06 15:65</div>
          </div>
        </div>

        <div className="transaction">
          <div className="left">
            <div className="title">Apple 15 Pro Max </div>
            <div className="description">Bought new Phone</div>
          </div>
          <div className="right">
            <div className="price red">-$900.00</div>
            <div className="datetime">2024-02-06 15:65</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
