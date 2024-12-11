import "./App.css";
import data from "./data.json";
import Header from "./Header"
import { Book } from "./Book"

function App() {
  const books = data.books;

  return (
    <>
      <div>
        <Header />
      </div>
      <div>
        {books.map((book, index) => (
          <Book key={index} book={book} />
        ))}
      </div>
    </>
  );
}

export default App;
