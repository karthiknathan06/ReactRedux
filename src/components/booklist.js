import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import Books from "./books";
import { insertbook } from "../actions";

const BookList = () => {
  const BookList = useSelector((state) => state.booklist);
  const dispatch = useDispatch();
  const [name, setName] = useState("");

  const updateName = (e) => {
    setName(e.target.value);
  };

  const clickbutton = (e) => {
    console.log(name);
    dispatch(insertbook(name));
  };

  return (
    <div>
      <p>List of books</p>
      <h1>
        {BookList.map((book) => (
          <Books name={book} />
        ))}
      </h1>
      <label for="insert">Book Name </label>
      <input type="text" name="insert" onChange={updateName} />
      <button onClick={clickbutton}>Insert</button>
    </div>
  );
};

export default BookList;
