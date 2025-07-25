
import { useState } from 'react';
import FormToDoList from '../components/FormToDoList'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);

  // const handleFormSubmit = (newTodo) => {
  //   // Aggiungi il nuovo todo alla lista
  //   setTodos(prevTodos => [...prevTodos, { ...newTodo, id: Date.now() }]);
  //   console.log('Nuovo todo aggiunto:', newTodo);
  // };

  const addToDo = (newToDo) => {
    setTodos([...todos,newToDo])
  }

  return (
    <>
      <h1>To Do List</h1>

      <div className="card-container">
         {/* <FormToDoList onFormSubmit={handleFormSubmit} /> */}
        
        <div className="card-container">
          <FormToDoList addToDo={addToDo}></FormToDoList>
        </div>

        {todos.map((todo) => (
          <div key={todo.id}>
            <span><strong> Cosa fare:</strong> {todo.description}</span>
            <span><strong> Data:</strong> {todo.date}</span>
            <span><strong> Orario:</strong> {todo.time}</span>
          </div>
          // <form
          //   key={todo.id}
          //   description= {todo.description}
          //   date= {todo.date}
          // ></form>
        ))}

        
      </div>
    </>
  )
}

export default App
