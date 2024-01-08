import {useState} from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import axios from "axios";

const App = () => {
    const [books, setBooks] = useState([]); //array of book objects

    const createBook = async (title) => {
        const response = await axios.post('http://localhost:3001/books',{title}
            )


        let updatedBooks = [...books,response.data] //adds new to end of array
        setBooks(updatedBooks);
        // console.log('Adding book with title',title);
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
            <h1>Reading List</h1>
            <BookList books={books} onDelete={deleteBookById} onEdit={editBookById}/>
        </div>
    )
}

export default App;