import Book from "./Book";
import booksStyles from "../../styles/BooksList.module.css";
const BooksList = ({ books }) => {
  return (
    <div>
      {books.map((book) => (
        <Book key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BooksList;
