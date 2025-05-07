import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { id: 1, name: "Book One", author: "Author One", year: 2020, topic: "Fiction" },
  { id: 2, name: "Book Two", author: "Author Two", year: 2021, topic: "Science" },
];

const bookSlice = createSlice({
  name: "books",
  initialState,
  reducers: {
    addBook: (state, action) => {
      state.push(action.payload);
    },
    editBook: (state, action) => {
      const { id, updatedBook } = action.payload;
      const index = state.findIndex((book) => book.id === id);
      if (index !== -1) {
        state[index] = { ...state[index], ...updatedBook };
      }
    },
    deleteBook: (state, action) => {
      return state.filter((book) => book.id !== action.payload);
    },
  },
});

export const { addBook, editBook, deleteBook } = bookSlice.actions;
export default bookSlice.reducer;