import { useState } from "react";
import FormControl from "react-bootstrap/FormControl";
import "./Contact.css";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [nameError, setNameError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [messageError, setMessageError] = useState("");

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (!value) {
      if (name === "name") setNameError("Name is required");
      if (name === "email") setEmailError("Email is required");
      if (name === "message") setMessageError("Message is required");
    } else {
      if (name === "name") setNameError("");
      if (name === "email") setEmailError("");
      if (!validateEmail(value)) {
        setEmailError("Please enter a valid email address");
      } else {
        setEmailError("");
      }
      if (name === "message") setMessageError("");
    }
  };

  return (
    <section className="container">
      <h1>Connect with me</h1>
      <form className="form-font-size">
        <div className="mb-3">
          <label htmlFor="nameInput" className="form-label">
            Name :
          </label>
          <FormControl
            type="text"
            size="sm"
            className="form-control"
            placeholder="cómo te llamas?"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={handleBlur}
            required
          />
          {nameError && <div className="error-message">{nameError}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="emailInput" className="form-label">
            Email Address :
          </label>
          <FormControl
            type="email"
            size="sm"
            className="form-control"
            id="email"
            placeholder="hola@hola.com"
            name="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={handleBlur}
            required
          />
          {emailError && <div className="error-message">{emailError}</div>}
        </div>
        <div className="mb-3">
          <label htmlFor="messageInput" className="form-label">
            Message :
          </label>
          <FormControl
            as="textarea"
            size="sm"
            className="form-control"
            id="message"
            rows="2"
            placeholder="talk to me..."
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onBlur={handleBlur}
            required
          />
          {messageError && <div className="error-message">{messageError}</div>}
        </div>
        <button type="submit" className="btn btn-primary btn-sm">
          Submit
        </button>
      </form>
    </section>
  );
}
