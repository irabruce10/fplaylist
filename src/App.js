import { useState } from "react";
import "./index.css";

export default function App() {
  const [item, setItem] = useState("");
  const [newItem, setNewItem] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    setNewItem([...item, { text: newItem }]);
    console.log(item);
  }
  return (
    <>
      <NavBar handleSubmit={handleSubmit} item={item} onItem={setItem} />

      <Box />
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

function Box() {
  return (
    <main className="main">
      <FilmList />
      <WatchedList />
    </main>
  );
}

function FilmList() {
  return (
    <div className="box">
      <button>d</button>
    </div>
  );
}

function WatchedList() {
  return (
    <div className="box">
      <button>d</button>

      <>
        <div className="summary"></div>
        ds
        <ul className="list"></ul>
      </>
    </div>
  );
}
