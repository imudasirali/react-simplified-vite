import { useLoaderData } from "react-router-dom";
import { User } from "../components/User";
import { contentLoader } from "../loaders";
import { Layout } from "../components/Layout";

function Users() {
  const users = useLoaderData();
  return (
    <>
      <h1 className="page-title">Users</h1>
      <Layout items={users.length}>
        {users.map((user) => (
          <User
            key={user.id}
            id={user.id}
            name={user.name}
            companyName={user.company.name}
            website={user.website}
            email={user.email}
          />
        ))}
      </Layout>
    </>
  );
}

const loader = contentLoader("users");
export const UsersRoute = {
  loader,
  element: <Users />,
};