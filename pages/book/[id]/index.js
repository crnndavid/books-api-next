import React from "react";
import Link from "next/link";
const book = ({ book }) => {
  return (
    <div>
      <h1>{book.title}</h1>
      <p>{book.categories}</p>
      <br />
      <Link href="/">Back to Home</Link>
    </div>
  );
};
export default book;

export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/books/${context.params.id}`);

  const book = await res.json();
  return {
    props: {
      book,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/books/`);

  const books = await res.json();

  const ids = books.map((book) => book.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));
  return {
    paths,
    fallback: false,
  };
};
