// this module defines a React application implementing a simple ToDo list
// the application will implement all CRUD operations using local state

// define a top level component 
function App(){
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

  // define a state variable 'value' to hold the input from the <input> element and a function 'setValue' to update it
  const [value, setValue] = React.useState('');

  // define a function 'handleSubmit' to capture the onSubmit event
  const handleSubmit = e => {
    // prevent the default behavior of the browser (normally a page reload)
    e.preventDefault();
    // check if the value exists, if not return and do nothing
    if (!value) return;

    // otherwise set the 'todos' state variable with a new array constructed from the old array and the new todo
    setTodos([...todos, {
      text: value,
      isCompleted: false
    }]);
  }

  // define a function 'removeTodo' to remove a todo that has been clicked on
  const removeTodo = e => {
    // retrieve the key attribute of the clicked on todo
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
  return(
    // start with a fragment as a container
    <>
      {/* create a series of <div>'s, one for each todo */}
      {todos.map((todo, i) => 
        <div key={i} id={i} className="card" onClick={removeTodo}>
          <div className ="card-body">{todo.text}</div>
        </div>)}
      {/* create a form with a text input to add new todos */}
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} placeholder="Add ToDo..." onChange={e => setValue(e.target.value)} />
      </form>
    </>
  );
}

// tell the React DOM to render our top level component
ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
