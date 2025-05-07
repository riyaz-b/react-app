import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "./bookSlice";

const AddBook = () => {
  const dispatch = useDispatch();
  const [newBook, setNewBook] = useState({
    name: "",
    author: "",
    year: "",
    topic: "",
  });
  const [isAdding, setIsAdding] = useState(false);

  const handleNewBookChange = (e) => {
    const { name, value } = e.target;
    setNewBook({ ...newBook, [name]: value });
  };

  const handleAddBookSave = () => {
    if (!newBook.name || !newBook.author || !newBook.year || !newBook.topic) {
      alert("All fields are mandatory!");
      return;
    }
    dispatch(addBook({ ...newBook, id: Date.now() })); // Add a unique ID
    setIsAdding(false);
    setNewBook({ name: "", author: "", year: "", topic: "" });
  };

  const handleCancel = () => {
    setIsAdding(false);
    setNewBook({ name: "", author: "", year: "", topic: "" });
  };

  return (
    <div>
      {isAdding ? (
        <div>
          <input
            name="name"
            value={newBook.name}
            onChange={handleNewBookChange}
            placeholder="Name"
          />
          <input
            name="author"
            value={newBook.author}
            onChange={handleNewBookChange}
            placeholder="Author"
          />
          <input
            name="year"
            value={newBook.year}
            onChange={handleNewBookChange}
            placeholder="Year"
          />
          <input
            name="topic"
            value={newBook.topic}
            onChange={handleNewBookChange}
            placeholder="Topic"
          />
          <button onClick={handleAddBookSave} style={{ marginRight: "5px" }}>
            Save
          </button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      ) : (
        <button onClick={() => setIsAdding(true)} style={{ marginBottom: "10px" }}>
          Add Book
        </button>
      )}
    </div>
  );
};

export default AddBook;