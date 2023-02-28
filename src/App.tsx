import React from "react";
import { ArrayBindingElement } from "typescript";
import Header from "./components/header/header";
import Main from "./components/main/main";
import api from "./util/api";

//................end of imports.....................................//

function App() {
  const [search, setSearch] = React.useState<any>("");
  const [onClik, setonClik] = React.useState<boolean>(false);
  const [books, setBooks] = React.useState<any>([]);
  function getApi() {
    api(search).then((res) => setBooks(res.items));
  }
  return (
    <>
      <Header handleApi={getApi} text={setSearch} />
      <Main bookList={books} />
    </>
  );
}

export default App;
