import {useContext} from "@types/react";
import BooksContext from "../context/books";


const useBooksContext = () => {
    return useContext(BooksContext);
}

export default useBooksContext;