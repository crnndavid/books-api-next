import { books } from "../../../data";

export default function handler({ query: { id } }, res) {
  const filteredBook = books.filter((book) => book.id === id);
  console.log(filteredBook);
  if (filteredBook.length > 0) {
    res.status(200).json(filteredBook[0]);
  } else {
    res.status(404).json({ message: `No Book found with id of ${id}` });
  }
}
