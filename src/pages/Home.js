import { useState, useMemo } from 'react';
import TodoItem from "../components/TodoItem";
import SearchBar from "../components/SearchBar";
import AddTodoForm from "../components/AddTodoForm";
import Stats from "../components/Stats";

function Home({ todos, stats,onAdd, onDelete, onToggle }) {
    
    const [search, setSearch]=useState("");
    const filteredTodos = useMemo(() => {
        const trimmed= search.trim().toLowerCase();
        return todos.filter((todo) => todo.title.toLowerCase().includes(trimmed));
    }, [todos, search]);

    return (
        <main>
            <section className="description">
                <h1>Keep yourself Busy</h1>
                <p>Manage your tasks efficiently and stay organized with our intuitive to-do list application.</p>
            </section>

            <section className="stats">
                <Stats totalTodos={stats.total} completedTodos={stats.completed} />
            </section>

            <section className="add-todo">
                <AddTodoForm onAdd={onAdd} />
            </section>

            <section className="search-bar">
                <SearchBar 
                value={search}
                onChange={setSearch}
                />
            
                {filteredTodos.length > 0 ? (
                    filteredTodos.map((todo) => (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            onToggle={onToggle}
                            onDelete={onDelete}
                        />
                    ))
                ) : (
                    <p className="no-results">No tasks found.</p>
                )}
            </section> 
        </main>
    );
}
export default Home;
