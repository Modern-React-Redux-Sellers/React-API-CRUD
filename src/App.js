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

    const editBookById = (id, newTitle) => {
        const updatedBooks = books.map((book) => {
            if (book.id === id){
                return {...book, title:newTitle}
            }
            return book;
        })
        setBooks(updatedBooks);
    }
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
            <BookList books={books} onDelete={deleteBookById} onEdit={editBookById}/>
        </div>
    )
}

export default App;