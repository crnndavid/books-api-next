import bookStyles from "../../styles/Book.module.css";

const Book = ({ book }) => {
  return (
    <div className={bookStyles.container}>
      <h2>
        {book.title} by {book.author}
      </h2>
      <p>{book.categories}</p>
    </div>
  );
};

export default Book;
