import BookShow from "./BookShow";
import {useContext} from "react";
import BooksContext from "../context/books";

const BookList = ({books, onDelete, onEdit}) => {
    const {count, incrementCount} = useContext(BooksContext);

    const renderBooks = books.map((book) => {
        return <BookShow book={book} key={book.id} onDelete={onDelete} onEdit={onEdit}/>
    })

    return (
        <div className="book-list">
            {count}
            <button onClick={incrementCount}>Click me</button>
            {renderBooks}
        </div>
    )
}

export default BookList;