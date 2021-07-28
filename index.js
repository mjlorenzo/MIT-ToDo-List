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

  return(
    <>
      {todos.map((todo, i) => 
        <div className="card">
          <div className ="card-body" key={i}>{todo.text}</div>
        </div>)}
    </>
  );
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
