import BookShow from "./BookShow";
import {useContext} from "react";
import BooksContext from "../context/books";

const BookList = ({books, onDelete, onEdit}) => {
    const contextVal = useContext(BooksContext);

    const renderBooks = books.map((book) => {
        return <BookShow book={book} key={book.id} onDelete={onDelete} onEdit={onEdit}/>
    })

    return (
        <div className="book-list">
            {contextVal}
            {renderBooks}
        </div>
    )
}

export default BookList;