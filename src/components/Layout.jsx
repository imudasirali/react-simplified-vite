import { useState } from "react";
import { Form } from "react-router-dom";

export function Layout({ children, items }) {
  const [view, setView] = useState("grid");
  return (
    <>
      <Form className="form form-layout">
        <div className="form-row">
          <div className="form-group">
            <select
              onChange={(e) => setView(e.target.value)}
              name="view"
              defaultValue="grid"
            >
              <option value="grid">Grid View</option>
              <option value="list">List View</option>
            </select>
          </div>
          <span>{items} items</span>
        </div>
      </Form>

      <div className={`${view === "grid" ? "card-grid" : "card-list"}`}>
        {children}
      </div>
    </>
  );
}
