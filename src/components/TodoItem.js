import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function TodoItem({ todo, onDelete, onToggle }) {
  return (
    <div className="todo-item">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => onToggle(todo.id)}
      />

      <Link to={`/todo/${todo.id}`} className={todo.completed ? "completed" : ""}>
        <span>{todo.title}</span>
        <p>{todo.description && <p>{todo.description}</p>}</p>
      </Link>

      <Button variant="outline-danger" onClick={() => onDelete(todo.id)}>
        Delete
      </Button>
    </div>
  );
}
export default TodoItem;


