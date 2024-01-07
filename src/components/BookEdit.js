import {useState} from "react";

const BookEdit = ({book, onSubmit}) => {
    const [title, setTitle] = useState(book.title)
    const handleTitleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(book.id,title)
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