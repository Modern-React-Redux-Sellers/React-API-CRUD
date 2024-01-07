import {useState} from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";

const App = () => {
    const [books, setBooks] = useState([]); //array of book objects

    const createBook = (title) => {
        let updatedBooks = [...books, {id:Math.round(Math.random() * 9999),
            title}] //adds new to end of array
        setBooks(updatedBooks);
        console.log('Adding book with title',title);
    }

    const editBook = () => {}
    //Loops through books, returns only books with different ID than one wanted to delete
    const deleteBookById = (id) => {
        const updatedBooks = books.filter((book) => {
            return book.id !== id;
        })
        setBooks(updatedBooks);
    }


    return (
        <div>
            {books.length}
            <BookCreate onCreate={createBook}/>
            <BookList books={books} onDelete={deleteBookById}/>
        </div>
    )
}

export default App;