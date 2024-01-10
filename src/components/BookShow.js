import {useState, useContext} from "react";
import BookEdit from "./BookEdit";
import BooksContext from "../context/books";

const BookShow = ({book}) => {
    const [showEdit, setShowEdit] = useState(false);

    const {deleteBookById} = useContext(BooksContext);



    const handleEditClick = () => {
        setShowEdit(!showEdit);
    }

    const handleDeleteClick = () => {
        deleteBookById(book.id)
    }

    const handleSubmit = () => {
        setShowEdit(false)
    }

    //Allows easy access to change displayed element dependant on if edit button is clicked
    let content = <h3>{book.title}</h3>
    if (showEdit){
        content = <BookEdit book={book} onSubmit={handleSubmit}/>
    }

    return (
        <div className="book-show">
            <img alt="books" src={`https://picsum.photos/seed/${book.id}/300/200`}/>
            <div>{content}</div>
            <div className="actions">
                <button className="edit" onClick={handleEditClick}>Edit</button>
                <button className="delete" onClick={handleDeleteClick}>Delete</button>
            </div>
        </div>
    )
}

export default BookShow;