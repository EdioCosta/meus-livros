import React, { createContext, useState, useEffect, ReactNode, useContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export type BookProps = {
  id: string;
  title: string;
  description: string;
  when: string;
  closed?: string;
  status: 'reading' | 'finished';
};

type BooksContextData = {
  books: BookProps[];
  addBook: (book: Omit<BookProps, 'id'>) => Promise<void>;
  loadBooks: () => Promise<void>;
  finishBook: (id: string) => void;
  deleteBook;
};

const BooksContext = createContext<BooksContextData>({} as BooksContextData);

export function BooksProvider({ children }: { children: ReactNode }) {
  const [books, setBooks] = useState<BookProps[]>([]);

  useEffect(() => {
    loadBooks();
  }, []);

  async function loadBooks() {
    const storedBooks = await AsyncStorage.getItem('@books');
    if (storedBooks) {
      setBooks(JSON.parse(storedBooks));
    }
  }

  async function addBook(book: Omit<BookProps, 'id'>) {
    const newBook = { ...book, id: String(new Date().getTime()) };
    const updatedBooks = [...books, newBook];
    setBooks(updatedBooks);
    await AsyncStorage.setItem('@books', JSON.stringify(updatedBooks));
  }

  function finishBook(id: string) {
    setBooks((prev) =>
      prev.map((book) =>
        book.id === id
          ? {
              ...book,
              status: 'finished',
              finishedAt: new Date(),
              closed: new Date().toISOString(),
            }
          : book,
      ),
    );
  }

  function deleteBook(id: string) {
    setBooks((prevBooks) => prevBooks.filter((book) => book.id !== id));
  }

  return (
    <BooksContext.Provider value={{ books, addBook, loadBooks, finishBook, deleteBook }}>
      {children}
    </BooksContext.Provider>
  );
}

export function useBooks() {
  return useContext(BooksContext);
}
