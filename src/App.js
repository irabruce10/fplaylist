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

  function handleSelect(items) {
    console.log("jey");
    const currentItem = newItem.find((item) => item.id === items.id);

    if (currentItem) {
      setNewItem(
        newItem.map((item) =>
          item.id === items.id
            ? { ...currentItem, qty: currentItem.qty + 1 }
            : item
        )
      );
    } else {
      setNewItem([...newItem, { ...items, qty: 1 }]);
    }
  }
  return (
    <>
      <NavBar
        handleSubmit={handleSubmit}
        item={item}
        onItem={setItem}
        newItem={newItem}
      />

      <Box newItem={newItem} onSelect={handleSelect} />
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

function Box({ newItem, onSelect }) {
  const [isOpen, setIsOpen] = useState(true);

  function handleToggle(isOpen) {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <main className="main">
      <FilmList
        newItem={newItem}
        onToggle={handleToggle}
        isOpen={isOpen}
        onSelect={onSelect}
      />
      <WatchedList newItem={newItem} />
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
        Add to List
      </button>
    </li>
  );
}

function WatchedList({ onToggle, isOpen, newItem }) {
  return (
    <div className="box">
      <button className="btn-toggle" onClick={onToggle}>
        {isOpen ? "-" : "+"}
      </button>

      <>
        <div className="summary">summary</div>

        {isOpen ? (
          <ul className="list">
            {newItem.map((item) => (
              <WatchedFilm item={item} key={item.id} />
            ))}
          </ul>
        ) : (
          ""
        )}
      </>
    </div>
  );
}

function WatchedFilm({ item }) {
  return (
    <li>
      <h3>{item.text}</h3>
      <button className="addToCart">Add to List</button>
    </li>
  );
}
