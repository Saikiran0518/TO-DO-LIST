import ToDoItem from "./ToDoItem";

function ToDoList({ todos, toggleTodo, deleteTodo, editTodo }) {
  return (
    <ul>
      {todos.length === 0 ? (
        <p>No tasks yet. Add one above!</p>
      ) : (
        todos.map((todo) => (
          <ToDoItem
            key={todo.id}
            todo={todo}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
          />
        ))
      )}
    </ul>
  );
}

export default ToDoList;
