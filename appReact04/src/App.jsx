
import { useState, useEffect } from 'react';
import FormToDoList from '../components/FormToDoList'
import './App.css'

function App() {
  const [todos, setTodos] = useState([]);
  const URL = "http://localhost:3000/todo"
  // const handleFormSubmit = (newTodo) => {
  //   // Aggiungi il nuovo todo alla lista
  //   setTodos(prevTodos => [...prevTodos, { ...newTodo, id: Date.now() }]);
  //   console.log('Nuovo todo aggiunto:', newTodo);
  // };

  

    useEffect(() => {
        fetch(URL)
        .then(response => response.json())
        //.then(todo => setTodos(todo))
        .then(json => console.log(json))
            
    }, []);

  useEffect(() => {
    fetch(URL,{
      method: 'POST',
      body: JSON.stringify({
        name: todos, // Use your own property name / key
      }),
    })
      .then((res) => res.json())
      .then((newToDo) => setTodos([...todos,newToDo]))
      
  }, []);


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
