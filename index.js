function App(){
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

  const [value, setValue] = React.useState('');
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;

    setTodos([...todos, {
      text: value,
      isCompleted: false
    }]);
  }

  return(
    <>
      {todos.map((todo, i) => 
        <div key={i} className="card">
          <div className ="card-body">{todo.text}</div>
        </div>)}
      <form onSubmit={handleSubmit}>
        <input type="text" value={value} placeholder="Add ToDo..." onChange={e => setValue(e.target.value)} />
      </form>
    </>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
