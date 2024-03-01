import "./App.css";

function App() {
  return (
    <main>
      <h1>
        $400<span>.00</span>
      </h1>
      <form>
        <div className="basic">
          <input type="text" placeholder={"+200 Samsung Tv"} />
          <input type="datetime-local"></input>
        </div>
        <div className="description">
          <input type="text" placeholder={"Description"} />
        </div>
        <button type="submit">Add New Transaction</button>
      </form>

      <div className="transactions">
        <div className="transaction">
          <div className="left">
            <div className="title">+200 Samsung Tv</div>
            <div className="description">Time For New Samsung Tv</div>
          </div>
          <div className="right">
            <div className="price">$200.00</div>
            <div className="datetime">2024-02-06 15:65</div>
          </div>
        </div>

        <div className="transaction">
          <div className="left">
            <div className="title">+200 Samsung Tv</div>
            <div className="description">Time For New Samsung Tv</div>
          </div>
          <div className="right">
            <div className="price">$200.00</div>
            <div className="datetime">2024-02-06 15:65</div>
          </div>
        </div>

        <div className="transaction">
          <div className="left">
            <div className="title">+200 Samsung Tv</div>
            <div className="description">Time For New Samsung Tv</div>
          </div>
          <div className="right">
            <div className="price">$200.00</div>
            <div className="datetime">2024-02-06 15:65</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default App;
