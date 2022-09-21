import bookStyles from "../../styles/Book.module.css";
import Link from "next/link";
const Book = ({ book }) => {
  return (
    <Link href="/book/[id]" as={`/book/${book.id}`}>
      <a>
        <div className={bookStyles.container}>
          <h2>
            {book.title} by {book.author}
          </h2>
          <p>{book.categories}</p>
        </div>
      </a>
    </Link>
  );
};

export default Book;
