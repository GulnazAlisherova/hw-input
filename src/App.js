import React,{useState, useEffect} from 'react'
import { Todolist } from './Todolist';
const getDatafromLS=()=>{
  const data = localStorage.getItem('books');
  if (data){
    return JSON.parse(data);
  }
  else {
    return []
  }
}
export const App = () => {
  const [books, setbooks]=useState(getDatafromLS());
  const [title, setTitle]=useState('');
  const [author, setAuthor]=useState('');
  const [isbn, setIsbn]=useState('');
  const handleAddBookSubmit=(e)=>{
    e.preventDefault();
    let book={
      title,
      author,
      isbn
    }
    setbooks([...books,book]);
    setTitle('');
    setAuthor('');
    setIsbn('');
  }
  const deleteBook=(isbn)=>{
    const filteredBooks=books.filter((element,index)=>{
      return element.isbn !== isbn
    })
    setbooks(filteredBooks);
  }
  useEffect(()=>{
    localStorage.setItem('books',JSON.stringify(books));
  },[books])
  return (
    <div className='wrapper'>
      <div className='main'>
        <div id='form-container'>
          <form autoComplete="off" className='form-group'
          onSubmit={handleAddBookSubmit}>
            <input type="text" placeholder='First Name' required
            onChange={(e)=>setTitle(e.target.value)} value={title}></input>
            <br></br>
            <input type="text" placeholder='Last Name' required
            onChange={(e)=>setAuthor(e.target.value)} value={author}></input>
            <br/>
            <input type="text" placeholder='Score' required
            onChange={(e)=>setIsbn(e.target.value)} value={isbn}></input>
            <br></br>
            <button type="submit">
              Add
            </button>
          </form>
        </div>
        <div id='view-container'>
          {books.length>0&&<>
            <div id='table-responsive'>
              <table id='table'>
                <thead>
                  <tr>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Score</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  <Todolist books={books} deleteBook={deleteBook}/> 
                </tbody>
              </table>
            </div>
          </>}
        </div>
      </div>
    </div>
  )
}
export default App;