import React from "react";
import Box from "@mui/material/Box";
import Book from "./book";
//.............. End of imports....................................
interface props {
  books: any;
  handleModalOpen: any;
  setactiveCard: any;
}
//................................End of props.............................
export default function BookList({
  books,
  handleModalOpen,
  setactiveCard,
}: props) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        padding: "20px",
      }}
    >
      {books.map((item: any) => {
        return (
          <Book
            data={item}
            handleModalOpen={handleModalOpen}
            setactiveCard={setactiveCard}
          />
        );
      })}
    </Box>
  );
}
