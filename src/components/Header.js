import { Container } from 'react-bootstrap';
import ThemeToggle from './ThemeToggle';

function Header({ theme, onToggleTheme }) {
    return(
        <header className="header">
            <Container className="d-flex align-items-center justify-content-between gap-3 py-3">
                <div className="header-content">
                    <span className="mark">✓</span>
                    <span>
                        <strong>To-Do List</strong>
                    </span>
                 </div>
                 <ThemeToggle theme={theme} onToggleTheme={onToggleTheme}></ThemeToggle>
            </Container>
        </header>

    );
}
export default Header;