import { useState } from "react";
import "./index.css";

export default function App() {
  const [item, setItem] = useState("");
  const [newItem, setNewItem] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    setNewItem([
      ...newItem,
      { text: item, id: new Date().getTime().toString(36) },
    ]);
    console.log(item);
  }
  return (
    <>
      <NavBar handleSubmit={handleSubmit} item={item} onItem={setItem} />

      <Box newItem={newItem} />
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

function Box({ newItem }) {
  return (
    <main className="main">
      <FilmList newItem={newItem} />
      <WatchedList />
    </main>
  );
}

function FilmList({ newItem }) {
  return (
    <div className="box">
      <button className="btn-toggle">-</button>
      <ul className="list">
        {newItem.map((item) => (
          <List item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function List({ item }) {
  return (
    <li>
      <h3>{item.text}</h3>
    </li>
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
