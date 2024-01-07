import {useState} from "react";

const BookCreate = ({onCreate}) => {
    const [title, setTitle] = useState('');

    const handleChange = (e) => {
        setTitle(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onCreate(title)
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