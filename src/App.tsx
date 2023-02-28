import React from "react";
import Header from "./components/header/header";
import Main from "./components/main/main";
import InfoModal from "./components/main/infoModal";
import api from "./util/api";
//................end of imports.....................................

function App() {
  const [modalOpen, setModalOpen] = React.useState<any>(false);
  const [search, setSearch] = React.useState<any>("");
  const [books, setBooks] = React.useState<any>([]);
  const [filtredBooks, setFiltredBooks] = React.useState<any>([]);
  const [activeCard, setactiveCard] = React.useState<any>([]);

  //............End of States............................

  function getApi() {
    api(search).then((res) => setBooks(res.items));
  }
  function setFilters() {
    setBooks(filtredBooks);
  }
  function openModal() {
    setModalOpen(true);
  }
  //.............End of api render.........................
  return (
    <>
      <Header handleApi={getApi} text={setSearch} />
      <Main
        bookList={books}
        filtredList={setFiltredBooks}
        handleFilter={setFilters}
        handleModalOpen={openModal}
        setactiveCard={setactiveCard}
      />
      <InfoModal
        setOpen={setModalOpen}
        isOpen={modalOpen}
        activeCard={activeCard}
      />
    </>
  );
}

export default App;
