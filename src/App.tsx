import React, { useState } from "react";
import Header from "./components/header/header";
import Main from "./components/main/main";
import InfoModal from "./components/main/infoModal";
import api from "./util/api";
//................end of imports.....................................

function App() {
  const [modalOpen, setModalOpen] = useState<any>(false);
  const [search, setSearch] = useState<any>("");
  const [books, setBooks] = useState<any>([]);
  const [allbooks, setAllBooks] = useState<any>([]);
  const [filtredBooks, setFiltredBooks] = useState<any>([]);
  const [activeCard, setactiveCard] = useState<any>([]);
  const [category, setCategory] = useState<any>([]);

  //............End of States............................
  function setCats(resApi: any) {
    const categories: any = [];
    resApi.forEach((book: any) => {
      if (book.volumeInfo.categories) {
        book.volumeInfo.categories.forEach((category: any) => {
          if (!categories.includes(category)) {
            categories.push(category);
          }
        });
      }
    });
    setCategory(categories);
  }

  async function getApi() {
    //  const call_api =  await  api(search).then((res) => setBooks(res.items));
    try {
      const callApi = await api(search);
      const resApi = await callApi.items;
      setBooks(resApi);
      setCats(resApi);
      setAllBooks(resApi);
    } catch (err) {
      console.log(`FAIL TO LOD DATA \n ${err}`);
    }
  }
  function setFilters() {
    setBooks(allbooks);

    if (filtredBooks !== "N/A") {
      const newBooks = books.filter(
        (val: any) => val.volumeInfo.categories == filtredBooks
      );
      setBooks(newBooks);
    } else {
      setBooks(allbooks);
    }
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
        categories={category}
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
