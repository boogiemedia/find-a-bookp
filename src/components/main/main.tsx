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
}
//.....................End of props..........................................

export default function Main({
  bookList,
  filtredList,
  handleFilter,
  handleModalOpen,
  setactiveCard,
}: props) {
  const [categories, setCategories] = React.useState<any>([]);
  return (
    <>
      <ToolBar
        data={bookList}
        filtredBooks={filtredList}
        handleFilter={handleFilter}
      />
      <BookList
        books={bookList}
        handleModalOpen={handleModalOpen}
        setactiveCard={setactiveCard}
      />
    </>
  );
}
