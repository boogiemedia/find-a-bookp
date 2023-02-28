import React from "react";
import ToolBar from "./toolBar";
import BookList from "./bookList";
//...............End of imports..................................

interface props {
  bookList: any;
  filtredList: any;
  handleFilter: any;
  handleModalOpen: any;
  setactiveCard: any;
  categories: any;
}
//.....................End of props..........................................

export default function Main({
  bookList,
  filtredList,
  handleFilter,
  handleModalOpen,
  setactiveCard,

  categories,
}: props) {
  return (
    <>
      <ToolBar
        data={bookList}
        filtredBooks={filtredList}
        handleFilter={handleFilter}
        categories={categories}
      />
      <BookList
        books={bookList}
        handleModalOpen={handleModalOpen}
        setactiveCard={setactiveCard}
      />
    </>
  );
}
