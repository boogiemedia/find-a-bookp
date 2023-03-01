import React, { useState } from "react";
import Header from "./components/header/header";
import Main from "./components/main/main";
import InfoModal from "./components/main/infoModal";
import api from "./util/api";
//................end of imports.....................................
export interface Book {
  volumeInfo: {
    title: string;
    subtitle: string;
    authors: string[];
    description: string;
    imageLinks: {
      thumbnail: string;
    };
    infoLink: string;
  };
}

function App() {
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [search, setSearch] = useState<string>("");
  const [books, setBooks] = useState<Book[]>([]);
  const [allbooks, setAllBooks] = useState<Book[]>([]);
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
    if (filtredBooks !== "N/A") {
      const newBooks = allbooks.filter(
        (val: any) => val.volumeInfo.categories == filtredBooks
      );
      setBooks(newBooks);
    } else {
      setBooks(allbooks);
    }
  }
  function resetFilter() {
    setBooks(allbooks);
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
        reset={resetFilter}
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
