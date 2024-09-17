import { useRef } from "react";
import "./style.css";
import { useState } from "react";
function App() {
  const refEmail = useRef("");
  const refPassword = useRef("");
  const [error, setError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  function submitForm(e) {
    e.preventDefault();
    if (error == "" && passwordError == "") {
      alert("Success");
    } else {
      alert("Please correct the input");
    }
  }

  const validateEmail = (value) => {
    const domainRequirement = value.endsWith("@webdevsimplified.com");
    if (!domainRequirement) {
      return "Email must end with @webdevsimplified.com.";
    }
    return "";
  };

  const validatePassword = (value) => {
    const lengthRequirement = value.length >= 10;
    const lowercaseRequirement = /[a-z]/.test(value);
    const uppercaseRequirement = /[A-Z]/.test(value);
    const numberRequirement = /[0-9]/.test(value);

    if (!lengthRequirement) {
      return "Password must be 10 characters or longer.";
    }
    if (!lowercaseRequirement) {
      return "Password must include a lowercase letter.";
    }
    if (!uppercaseRequirement) {
      return "Password must include an uppercase letter.";
    }
    if (!numberRequirement) {
      return "Password must include a number.";
    }
    return "";
  };

  function checkEmail() {
    console.log(refEmail.current.value);
    console.log(validateEmail(refEmail.current.value));
    setError(validateEmail(refEmail.current.value));
  }

  function checkPassword() {
    setPasswordError(validatePassword(refPassword.current.value));
  }

  return (
    <form onSubmit={submitForm} className="form">
      <div className={`form-group ${error.length != "" ? "error" : ""}`}>
        <label className="label" htmlFor="email">
          Email
        </label>
        <input
          onChange={checkEmail}
          required
          className="input"
          type="email"
          id="email"
          ref={refEmail}
        />
        <div className="msg">{error}</div>
      </div>
      <div
        className={`form-group ${passwordError.length != "" ? "error" : ""}`}
      >
        <label className="label" htmlFor="password">
          Password
        </label>
        <input
          onChange={checkPassword}
          className="input"
          ref={refPassword}
          type="password"
          id="password"
        />
        <div className="msg">{passwordError}</div>
      </div>
      <button className="btn" type="submit">
        Submit
      </button>
    </form>
  );
}

export default App;
