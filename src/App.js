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

    setItem("");
  }
  return (
    <>
      <NavBar
        handleSubmit={handleSubmit}
        item={item}
        onItem={setItem}
        newItem={newItem}
      />

      <Box newItem={newItem} />
    </>
  );
}

function NavBar({ handleSubmit, item, onItem, newItem }) {
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

      <p className="num-results">
        Found <span>{newItem.length} </span>results
      </p>
    </nav>
  );
}

function Box({ newItem }) {
  const [isOpen, setIsOpen] = useState(false);

  function handleToggle(isOpen) {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <main className="main">
      <FilmList newItem={newItem} onToggle={handleToggle} isOpen={isOpen} />
      <WatchedList />
    </main>
  );
}

function FilmList({ newItem, onToggle, isOpen }) {
  return (
    <div className="box">
      <button className="btn-toggle" onClick={onToggle}>
        {isOpen ? "+" : "-"}
      </button>

      {isOpen ? (
        <ul className="list">
          {newItem.map((item) => (
            <List item={item} key={item.id} />
          ))}
        </ul>
      ) : (
        ""
      )}
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
