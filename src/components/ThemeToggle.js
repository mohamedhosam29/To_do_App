function ThemeToggle({ theme, onToggleTheme }) {
    const isLight = theme === "light";
    return(
        <button className="theme-toggle" onClick={onToggleTheme}>
            {isLight ? "☾ Dark" : "☀ Light"} mode
        </button>
    );
}
export default ThemeToggle;