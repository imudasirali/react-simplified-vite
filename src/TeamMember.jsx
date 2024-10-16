import { useLoaderData } from "react-router-dom";

export function TeamMember() {
  const teamMember = useLoaderData();
  return <h1>Team member - {teamMember.name}</h1>;
}
