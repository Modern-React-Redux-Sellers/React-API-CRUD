import { useEffect, useContext} from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import BooksContext from "./context/books";

const App = () => {
  const {fetchBooks} = useContext(BooksContext);

    useEffect(() => {fetchBooks()},[]);


    return (
        <div>
            <BookCreate/>
            <h1>Reading List</h1>
            <BookList />
        </div>
    )
}

export default App;