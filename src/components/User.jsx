import { Link } from "react-router-dom";
export function User({ id, name, companyName, website, email }) {
  return (
    <div className="card">
      <div className="card-header">{name}</div>
      <div className="card-body">
        <div>{companyName}</div>
        <div>{website}</div>
        <div>{email}</div>
      </div>
      <div className="card-footer">
        <Link className="btn" to={`/users/${id}`}>
          View
        </Link>
      </div>
    </div>
  );
}
