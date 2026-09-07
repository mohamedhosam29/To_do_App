function Stats({ totalTodos, completedTodos }) {
    const remaining = totalTodos - completedTodos;

    return(
        <section className="todo-statistics">
            <div className="stat-card">
                <span>Total Tasks</span>
                <strong>{totalTodos}</strong>
            </div>
            <div className="stat-card">
                <span>Completed Tasks</span>
                <strong>{completedTodos}</strong>
            </div>
            <div className="stat-card">
                <span>Remaining Tasks</span>
                <strong>{remaining}</strong>
            </div>
        </section>

    );
}
export default Stats;