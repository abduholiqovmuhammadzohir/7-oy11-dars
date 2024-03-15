import { useSelector, useDispatch } from 'react-redux'
import { useRef } from 'react';

import './App.css'

function App() {

  const dispatch = useDispatch();
  let data = useSelector(state => state.todos);
  const inputRef = useRef()

  function handleClick(e) {
    e.preventDefault()
    const todoItem = {
      id: Date.now(),
      name: inputRef.current.value
    }

    dispatch({ type: "ADD", payload: todoItem });

    inputRef.current.value = ""
  }

  function handleDelete(id) {
    confirm("Rostan ham o'chirmoqchimisiz")
    dispatch({ type: "REMOVE", payload: id })
  }

  return (
    <>
      <div className="container mt-5">
        <h1 className="text-center mb-4" >To Lo List</h1>
        <form>
          <div className="input-group flex-nowrap">
            <input ref={inputRef} type="text" className="form-control" placeholder="Enter a task" aria-label="Username" aria-describedby="addon-wrapping" />
          </div>
          <button className="add" onClick={handleClick}>Add Task</button>
        </form>
        <div className="tables">
          {
            data.map((el, index) => {
              return (
                <div className="task" key={index}>
                  <h3>{el.name}</h3>
                  <button onClick={() => { handleDelete(el.id) }} type="button" className="btn btn-primary">Delete</button>
                </div>
              )

            })
          }
        </div>
      </div>
    </>
  )
}

export default App
