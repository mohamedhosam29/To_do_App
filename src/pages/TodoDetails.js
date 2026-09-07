import { Button, Alert, Container } from 'react-bootstrap';
import { Link, useNavigate, useParams} from 'react-router-dom'

function TodoDetails({todos, onToggle, onDelete}){
    const navigate =useNavigate();
    const {id} = useParams();
    const todo= todos.find((item)=>item.id===Number(id));
    const remove=()=>{
        onDelete(todo.id);
        navigate('/');
    }

    if (!todo) {
        return (
        <Container className="py-4 py-md-5">
            <div>
            <Link to="/" className="back-link text-decoration-none"><strong>← Back to tasks</strong></Link>
            <br/><br/> 
            <Alert variant="danger">
                <strong>Task not found.</strong>
            </Alert>
            </div>
        </Container>
        );
    }
    
    return(
        <main>
            <Container className="py-4 py-md-5">
                <Link to="/" className="back-link text-decoration-none"><strong>← Back to tasks</strong></Link>
                <div className="todo-card mt-3">

                    <div className="status-top">
                    <span className={`status ${todo.completed ? 'comp' : 'prog'}`}>
                        {todo.completed ? 'Completed' : 'In progress'}
                    </span>
                    </div>

                    <div className="todo-detail">
                    <h1>{todo.title}</h1>
                    <p>{todo.description}</p>
                    </div>

                    <div className="todo-status">
                        <span>Status</span>
                        <strong>{todo.completed ? 'Complete' : 'Incomplete' }</strong>
                    </div>

                    <div className="todo-date">
                        <span>{new Date(todo.createdAt).toLocaleString()}</span>
                    </div>

                    <div className="todo-actions">
                    {todo.completed ? (
                        <Button className="btnn incomp" variant="outline-primary" onClick={() => onToggle(todo.id)}>
                        Mark Incomplete
                        </Button>
                    ) : (
                        <Button className="btnn comp" variant="outline-success" onClick={() => onToggle(todo.id)}>
                        Mark Complete
                        </Button>
                    )}
                    <Button variant="outline-danger" onClick={remove}>
                        <strong>Delete task</strong>
                    </Button>
                    </div>














                </div>

            </Container>

        </main>
    );


}
export default TodoDetails;