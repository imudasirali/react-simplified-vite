export default function User(props) {
  return (
    <li key={props.id}>
      <h2>{props.name}</h2>
      <p>Username: {props.username}</p>
      <p>Email: {props.email}</p>
      <p>Phone: {props.phone}</p>
    </li>
  );
}
