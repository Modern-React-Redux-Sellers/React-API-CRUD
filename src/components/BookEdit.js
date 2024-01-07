import {useState} from "react";

const BookEdit = ({book, onEdit}) => {
    const [title, setTitle] = useState(book.title)
    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onEdit(book.id, title); //passed down from App.js
    }
    return (
        <div>
            <form className="book-edit" onSubmit={handleSubmit}>
                <label>Title</label>
                <input className="input" value={title} onChange={handleTitleChange}/>
                <button className="button is-primary">Save</button>
            </form>
        </div>
    )
}

export default BookEdit;