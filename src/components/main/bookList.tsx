import React from "react";
import Box from "@mui/material/Box";
import Book from "./book";
interface props {
  books: any;
}
export default function BookList({ books }: props) {
  console.log(books);
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
        return <Book data={item} />;
      })}
    </Box>
  );
}
