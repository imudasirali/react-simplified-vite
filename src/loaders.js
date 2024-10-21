export function contentLoader(content) {
  return function loader({ request: { signal } }) {
    return fetch(`http://127.0.0.1:3000/${content}`, {
      signal,
    });
  };
}
