import React from 'react'
export const Todolist = ({ books, deleteBook }) => {
    return books.map(book => (
        <tr key={book.isbn}>
            <td>{book.title}</td>
            <td>{book.author}</td>
            <td>{book.isbn}</td>
            <td className='delete-btn' onClick={() => deleteBook(book.isbn)}>
                <button>-</button>
            </td>
        </tr>
    ))
}
export default Todolist;