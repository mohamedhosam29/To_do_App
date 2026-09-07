import { Form } from 'react-bootstrap';

function SearchBar({ value, onChange }) {
  return (
    <div className="search-card">
      <h2>Your Tasks</h2>
      <span className="search-icon">⌕</span>
      <Form.Control
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search todos..."
      />
      {value && (
        <button
          className="clear-search"
          onClick={() => onChange('')}
        >
          ×
        </button>
      )}
    </div>
  );
}
export default SearchBar;