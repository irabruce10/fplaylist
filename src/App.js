import { useState } from "react";
import "./index.css";

export default function App() {
  const [item, setItem] = useState("");
  const [newItem, setNewItem] = useState([]);
  const [watched, setWatched] = useState([]);

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
    const currentItem = watched.find((item) => item.id === items.id);

    if (currentItem) {
      setWatched(
        watched.map((item) =>
          item.id === items.id
            ? { ...currentItem, qty: currentItem.qty + 1 }
            : item
        )
      );
    } else {
      setWatched([...watched, { ...items, qty: 1 }]);
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

      <Box newItem={newItem} watched={watched} onSelect={handleSelect} />
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

function Box({ newItem, onSelect, watched }) {
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
      <WatchedList watched={watched} isOpen={isOpen} />
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

function WatchedList({ onToggle, isOpen, watched }) {
  return (
    <div className="box">
      <button className="btn-toggle" onClick={onToggle}>
        {isOpen ? "-" : "+"}
      </button>

      <>
        <div className="summary">
          <h3>
            FilmList to WToday <span>{watched.length}</span>
          </h3>
        </div>

        {isOpen ? (
          <ul className="list">
            {watched.map((item) => (
              <li>
                <h3>{item.text}</h3>
              </li>
            ))}
          </ul>
        ) : (
          ""
        )}
      </>
    </div>
  );
}

function WatchedFilm({ item, watched }) {
  return (
    <li>
      <h3>{item.text}</h3>
      <button className="addToCart">Add to List</button>
    </li>
  );
}
