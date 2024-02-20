import { useState } from "react";
import "./index.css";

export default function App() {
  const [item, setItem] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    
    console.log(item);
  }
  return (
    <>
      <NavBar handleSubmit={handleSubmit} item={item} onItem={setItem} />

      <main className="main">
        <div className="box"></div>

        <div className="box">
          <button></button>

          <>
            <div className="summary"></div>

            <ul className="list"></ul>
          </>
        </div>
      </main>
    </>
  );
}

function NavBar({ handleSubmit, item, onItem }) {
  return (
    <nav className="nav-bar">
      <div className="logo">
        <span role="img">🍿</span>
        <h1>FPlaylist...</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="enter something...."
          className="search"
          value={item}
          onChange={(e) => onItem(e.target.value)}
        />
      </form>

      <p className="num-results">Found results</p>
    </nav>
  );
}
