import "./App.css";
import data from "./data.json";
import Header from "./Header"
import Book from "./Book"

function App() {
  const { books } = data;
  console.log(books);

  return (
    <>
    <div>
            <Header />
            {}
        </div>
      <div>Book library goes here</div>
    </>
  );
}

export default App;
