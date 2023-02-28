import React from "react";
import ToolBar from "./toolBar";
import BookList from "./bookList";
interface props {
  bookList: any;
}

export default function Main({ bookList }: props) {
  return (
    <>
      <ToolBar />
      <BookList books={bookList} />
    </>
  );
}
