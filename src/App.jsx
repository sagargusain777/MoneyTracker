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

      </div>

    </main>
  );
}

export default App;
