import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { editBook } from "./bookSlice";

const EditBook = ({ book, onCancel, onSave }) => {
  const dispatch = useDispatch();
  const [updatedBook, setUpdatedBook] = useState(book);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUpdatedBook({ ...updatedBook, [name]: value });
  };

  const handleSave = () => {
    if (!updatedBook.name || !updatedBook.author || !updatedBook.year || !updatedBook.topic) {
      alert("All fields are mandatory!");
      return;
    }
    dispatch(editBook({ id: book.id, updatedBook }));
    onSave();
  };

  return (
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
        <button onClick={onCancel}>Cancel</button>
      </td>
    </>
  );
};

export default EditBook;