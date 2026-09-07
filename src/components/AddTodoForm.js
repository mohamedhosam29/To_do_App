import {useState} from 'react';
import { Form, Button } from 'react-bootstrap';

function AddTodo({onAdd}) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
  
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title.trim()) {
            alert("You haven't entered a task yet.");
            return;
        }
        onAdd({ title, description });
        setTitle('');
        setDescription('');
    };

    return (
      <Form onSubmit={handleSubmit}>
        <h2>Create Tasks</h2>
        <Form.Control
          value={title}
          type="text"
          placeholder="Enter Your To-Do "
          aria-label="Todo title"
          onChange={(e) => setTitle(e.target.value)}
        />
        <br />
        <Form.Control
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          placeholder="Optional Description"
          aria-label="Todo description"
        />
        <br />
        <Button variant="success" type="submit" >
          + Add Task
        </Button>
      </Form>
    );
}
export default AddTodo;