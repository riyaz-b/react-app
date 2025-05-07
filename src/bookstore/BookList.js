import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteBook, editBook, addBook } from "./bookSlice";

const BookList = () => {
  const books = useSelector((state) => state.books || []); // Fallback to an empty array
  const dispatch = useDispatch();

  const [editingBookId, setEditingBookId] = useState(null);
  const [updatedBook, setUpdatedBook] = useState({});
  const [isAdding, setIsAdding] = useState(false);
  const [newBook, setNewBook] = useState({
    name: "",
    author: "",
    year: "",
    topic: "",
  });

  const handleDelete = (id) => {
    dispatch(deleteBook(id));
  };

  const handleEditClick = (book) => {
    setEditingBookId(book.id);
    setUpdatedBook(book);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedBook({ ...updatedBook, [name]: value });
  };

  const handleSave = () => {
    if (!updatedBook.name || !updatedBook.author || !updatedBook.year || !updatedBook.topic) {
      alert("All fields are mandatory!");
      return;
    }
    dispatch(editBook({ id: editingBookId, updatedBook }));
    setEditingBookId(null);
    setUpdatedBook({});
  };

  const handleCancel = () => {
    setEditingBookId(null);
    setUpdatedBook({});
    setIsAdding(false);
    setNewBook({ name: "", author: "", year: "", topic: "" });
  };

  const handleAddBookClick = () => {
    setIsAdding(true);
  };

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

  if (!books || books.length === 0) {
    return <p>No books available.</p>;
  }

  return (
    <div>
      <h2>Book List</h2>
      <button onClick={handleAddBookClick} style={{ marginBottom: "10px" }}>
        Add Book
      </button>
      <table style={{ width: "100%", borderCollapse: "collapse" }}>
        <thead>
          <tr>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Name</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Author</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Year</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Topic</th>
            <th style={{ border: "1px solid #ddd", padding: "8px" }}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              {editingBookId === book.id ? (
                <>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    <input
                      name="name"
                      value={updatedBook.name || ""}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    <input
                      name="author"
                      value={updatedBook.author || ""}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    <input
                      name="year"
                      value={updatedBook.year || ""}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    <input
                      name="topic"
                      value={updatedBook.topic || ""}
                      onChange={handleInputChange}
                    />
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    <button onClick={handleSave} style={{ marginRight: "5px" }}>
                      Save
                    </button>
                    <button onClick={handleCancel}>Cancel</button>
                  </td>
                </>
              ) : (
                <>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    {book.name}
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    {book.author}
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    {book.year}
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    {book.topic}
                  </td>
                  <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                    <button
                      onClick={() => handleEditClick(book)}
                      style={{ marginRight: "5px" }}
                    >
                      Edit
                    </button>
                    <button onClick={() => handleDelete(book.id)}>Delete</button>
                  </td>
                </>
              )}
            </tr>
          ))}
          {isAdding && (
            <tr>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                <input
                  name="name"
                  value={newBook.name}
                  onChange={handleNewBookChange}
                  placeholder="Name"
                />
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                <input
                  name="author"
                  value={newBook.author}
                  onChange={handleNewBookChange}
                  placeholder="Author"
                />
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                <input
                  name="year"
                  value={newBook.year}
                  onChange={handleNewBookChange}
                  placeholder="Year"
                />
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                <input
                  name="topic"
                  value={newBook.topic}
                  onChange={handleNewBookChange}
                  placeholder="Topic"
                />
              </td>
              <td style={{ border: "1px solid #ddd", padding: "8px" }}>
                <button
                  onClick={handleAddBookSave}
                  style={{ marginRight: "5px" }}
                >
                  Save
                </button>
                <button onClick={handleCancel}>Cancel</button>
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BookList;