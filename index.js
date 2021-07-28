// this module defines a React application implementing a simple ToDo list
// the application will implement all CRUD operations using local state

// define a top level component 
function App() {
  // define a state variable 'todos', and a function 'setTodos' used to update that variable
  // also define an initial placeholder state for the 'todos' variable
  const [todos, setTodos] = React.useState([
    {
      text: 'learn react',
      isCompleted: false,
    },
    {
      text: 'meet friend for lunch',
      isCompleted: false,
    },
    {
      text: 'build todo app',
      isCompleted: false,
    }
  ])

  // define a function 'addTodo' to add a todo to the list
  const addTodo = text => {
    setTodos([...todos, {
      text,
      isCompleted: false
    }]);
  }

  // define a function 'removeTodo' to remove a todo that has been clicked on
  const removeTodo = e => {
    // retrieve the id attribute of the clicked on todo
    let index = e.currentTarget.id;
    // if there wasn't one, ignore and return
    if (!index) return;
    // make a copy of the state variable
    // modifying the state variable in place will not work as intended
    let tempTodos = [...todos];
    // modify the copy
    tempTodos.splice(index, 1);
    // notify React about the change
    setTodos(tempTodos);
  }
  // return our JSX
  return (
    // start with a fragment as a container
    <>
      {/* create a series of <div>'s, one for each todo */}
      {todos.map((todo, i) =>
        <div key={i} id={i} className="card" onClick={removeTodo}>
          <div className="card-body">{todo.text}</div>
        </div>)}
        <TodoForm addTodo={addTodo} />
    </>
  );
}

// tell the React DOM to render our top level component
ReactDOM.render(
  <App />,
  document.getElementById('root')
);
