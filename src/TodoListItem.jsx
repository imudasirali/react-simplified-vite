export default function TodoListItem({ children, isComplete }) {
  return (
    <li>
      <label>
        <input type="checkbox" checked={isComplete} />
        {children}
      </label>
    </li>
  );
}
