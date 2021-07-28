// this module defines an individual ToDo list item
function Todo({ todo, index, removeTodo }) {

  function remove() {
    removeTodo(index);
  }
  
  return (
    <div key={index} id={index} className="card" onClick={remove}>
      <div className="card-body">{todo.text}</div>
    </div>
  );
}