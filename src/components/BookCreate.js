import {useState, useContext} from "react";
import BooksContext from "../context/books";

const BookCreate = () => {
    const {createBook} = useContext(BooksContext);
    const [title, setTitle] = useState('');

    const handleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        createBook(title)
        setTitle('');
    }

    return (
        <div className="book-create">
            <h3>Add a book</h3>
            <form onSubmit={handleSubmit}>
                <label>Create book</label>
                <input className="input" value={title} onChange={handleChange}/>
                <button className="button">submit</button>
            </form>
        </div>
    )
}

export default BookCreate;