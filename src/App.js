import {useState} from "react";
import BookCreate from "./components/BookCreate";

const App = () => {
    const [books, setBooks] = useState([]); //array of book objects

    const createBook = (title) => {
        let updatedBooks = [...books, {id:Math.round(Math.random() * 9999),
            title}] //adds new to end of array
        setBooks(updatedBooks);
        console.log('Adding book with title',title);
    }

    const editBook = () => {}
    const deleteBook = () => {}


    return (
        <div>
            {books.length}
            <BookCreate onCreate={createBook}/>
        </div>
    )
}

export default App;