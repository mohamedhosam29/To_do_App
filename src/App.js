import React,{useState, useEffect} from "react";
import{
  BrowserRouter as Router,
  Routes,
  Route,
}from "react-router-dom";
import Header from './components/Header';
import Home from './pages/Home';
import TodoDetails from './pages/TodoDetails';

function getTheme() {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === 'light' || savedTheme === 'dark') return savedTheme;
  return "light";}

function getTodos(){
  const savedTodos = localStorage.getItem("todos");
  if (savedTodos){
    try{
      return JSON.parse(savedTodos);
    }
    catch(error){
      return[];
    }
  }
  return[];
}

function App() {
  const [todos, setTodos] = useState(getTodos);

  useEffect(()=>{
    localStorage.setItem("todos",JSON.stringify(todos));
  },[todos]);

  const [theme, setTheme] = useState(getTheme);

  useEffect(() => {
  localStorage.setItem("theme", theme);
  
  if (theme === "dark") {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
}, [theme]);

const handleAdd=({title, description})=>{
  const newtodo={
    id: todos.length + 1,
    title,
    description,
    completed: false,          
    createdAt: Date.now(),
  };
  setTodos([...todos, newtodo]);
};

const handleDelete=(id)=>{
  const updatedTodos=todos.filter((todo)=>todo.id !== id);
  setTodos(updatedTodos);
};

const handleToggleComplete=(id)=>{
  const EditedTodos=todos.map((todo)=>{
    if(todo.id === id){
      return {...todo, completed: !todo.completed};
    }
    return todo;
  });
  setTodos(EditedTodos);
}

const stats={
  total: todos.length,
  completed: todos.filter((todo)=>todo.completed).length,
};

  return (
    <div className="App">
      <Header
        theme={theme} 
        onToggleTheme={()=>setTheme(theme === "light" ? "dark" : "light")} 
      />

      <Routes>
        <Route path="/" element=
          {
            <Home
            todos={todos}
            onAdd={handleAdd}
            onDelete={handleDelete}
            onToggle={handleToggleComplete}
            stats={stats}
            />
          } 
        />
        <Route path="/todo/:id" element=
          {
            <TodoDetails
              todos={todos}
              onDelete={handleDelete}
              onToggle={handleToggleComplete}
            />
          }
        />
      </Routes>
    </div>
  );
}
export default App;

  

