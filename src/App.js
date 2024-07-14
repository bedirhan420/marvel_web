import React, { useState } from "react";
import Categories from "./Categories";
import "./App.css";

function App() {
  const [categories, setCategories] = useState("characters");
  const [items, setItems] = useState(0);
  const [searchInput, setSearchInput] = useState(""); // State variable to store the input value

  function next() {
    setItems((item) => item + 5);
  }

  function back() {
    setItems((item) => (item > 4 ? item - 5 : item));
  }

  // Function to handle changes in the search input field
  function handleSearchInputChange(event) {
    setSearchInput(event.target.value);
  }

  return (
    <div className="App">
      <img
        src="https://raw.githubusercontent.com/mertakpinar29/marvelapi/master/src/img/marvel-logo.png"
        alt="img"
        className="logo"
      />
      <div className="link-container">
        <a onClick={() => setCategories("characters")}> Characters</a>
        <a onClick={() => setCategories("comics")}> Comics</a>
        <a onClick={() => setCategories("creators")}> Creators</a>
        <a onClick={() => setCategories("events")}> Events</a>
        <a onClick={() => setCategories("series")}> Series</a>
        <a onClick={() => setCategories("stories")}> Stories</a>
      </div>

      <div className="searchbar">
        <input
          type="text"
          placeholder="Search..."
          value={searchInput} // Bind the input value to the state variable
          onChange={handleSearchInputChange} // Handle input changes
        />
        <button>Search</button>
      </div>

      <div className="categories">
        <Categories category={categories} items={items} searchInput={searchInput} />
      </div>

      <div className="button-container">
        <button className="left" onClick={back}>
          Back
        </button>
        <button className="right" onClick={next}>
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
