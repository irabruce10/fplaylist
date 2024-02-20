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
  const [isOpen, setIsOpen] = useState(true);

  function handleToggle(isOpen) {
    setIsOpen((isOpen) => !isOpen);
  }

  function handleSelect(item) {
    console.log("hh");
    console.log(item);
  }

  return (
    <main className="main">
      <FilmList
        newItem={newItem}
        onToggle={handleToggle}
        isOpen={isOpen}
        onSelect={handleSelect}
      />
      <WatchedList />
    </main>
  );
}

function FilmList({ newItem, onToggle, isOpen, onSelect }) {
  return (
    <div className="box">
      <button className="btn-toggle" onClick={onToggle}>
        {isOpen ? "-" : "+"}
      </button>

      {isOpen ? (
        <ul className="list">
          {newItem.map((item) => (
            <List item={item} key={item.id} onSelect={onSelect} />
          ))}
        </ul>
      ) : (
        ""
      )}
    </div>
  );
}

function List({ item, onSelect }) {
  return (
    <li>
      <h3>{item.text}</h3>
      <button className="addToCart" onClick={() => onSelect(item)}>
        add to list
      </button>
    </li>
  );
}

function WatchedList() {
  return (
    <div className="box">
      <button className="btn-toggle">-</button>

      <>
        <div className="summary"></div>
        ds
        <ul className="list"></ul>
      </>
    </div>
  );
}
