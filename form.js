// this module describes the TodoForm component that allows addition of todos to the list

function TodoForm({ addTodo }) {

  // define a state variable 'value' to hold the input from the <input> element and a function 'setValue' to update it
  const [value, setValue] = React.useState('');

  // define a function 'handleSubmit' to capture the onSubmit event
  const handleSubmit = e => {
    // prevent the default behavior of the browser (normally a page reload)
    e.preventDefault();
    // check if the value exists, if not return and do nothing
    if (!value) return;

    // otherwise call the 'addTodo()' function with the value
    addTodo(value);
  }

  // return the form
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={value} placeholder="Add ToDo..." onChange={e => setValue(e.target.value)} />
    </form>
  );
}