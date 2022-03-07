import './App.scss';
import React from 'react'


function App() {
  const [todos, setTodos] = React.useState([]);
  const [todo, setTodo] = React.useState("");
  const [todoEditing, setTodoEditing] = React.useState (null);
  const [editingText, setEditingText] = React.useState ("");
  // const [number, setNumber] = React.useState("test")
  // const [theme,setTheme] = React.useState("")
  // function incrementNumber(){
  //  setNumber("")
  //  setTheme('good')
  // }
  //  function decrementNumber(){
  //   setNumber("")
  //   setTheme('bad')
  //  }
  
  //CREATE  
  function handleSubmit(e) {
    e.preventDefault();

    const newTodo = {
      id: new Date().getTime(),
      text: todo,
      completed: false,
    };
    setTodos([...todos].concat(newTodo))
    setTodo("");
  }

  //DELETE
  function deleteTodo(id) {
    setTodos(todos.filter(todo => todo.id !== id));
  }
  //CREATED
  function toggleComplete(id) {
    let updatedTodos = [...todos].map((todo) => {
      if (todo.id === id) {
        todo.completed = !todo.completed;
      }
      return todo;
    });
    setTodos(updatedTodos);
  }
  //EDIT the update
  function submitEdits(id){
    const updatedTodos = [...todos].map((todo) =>{
      if (todo.id === id) {
        todo.text = editingText
      }
      return todo 
    })
    setTodos(updatedTodos)
    setTodoEditing(null)
    setEditingText("") 
  }
  return (
    <div id="todo-list">
      <h1>Todo List</h1>
      {/* <button onClick={incrementNumber}>Oo</button>
      <span>{number} </span>
      <span>{theme} </span>
      <button onClick={decrementNumber}>Wala</button> */}
  
   <form onSubmit={handleSubmit}>
        <input
    type="text"
    placeholder='Add here'
     onChange={(e) => setTodo(e.target.value)}
      value={todo}
       />
     <button type="submit">Add Todo</button>
      </form>

      {todos.map((todo) => (
      <div key={todo.id} className="todo">
      <div className="todo-text">
      <input
       type="checkbox"
        id="completed"
       checked={todo.completed}
      onChange={() => toggleComplete(todo.id)}
       />
       {todo.id === todoEditing ? (
       <input
        type="text"
        onChange={(e) => setEditingText(e.target.value)}
       />
     ) : <div>{todo.text}</div>
       }
    </div>
    <div className="todo-actions">
    {todo.id === todoEditing ? (
     <button onClick={() => submitEdits(todo.id)}>Submit Edits</button>
      ) : (
     <button onClick={() => setTodoEditing(todo.id)}>Edit</button>
     )}<button onClick={() => deleteTodo(todo.id)}>Delete</button>
     </div>
     </div>
   ))}
 </div>
  );
};

export default App;