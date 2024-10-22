export function contentLoader(content, params) {
  return function loader({ request: { signal }, params }) {
    return fetch(`http://127.0.0.1:3000/${content}`, {
      signal,
    });
  };
}
