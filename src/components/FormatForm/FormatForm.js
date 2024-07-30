import html from "html";
import React, { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import Form from "react-bootstrap/Form";
import 'react-toastify/dist/ReactToastify.css';
import "./FormatForm.css";

function FormatForm() {
  const [unformattedHTML, setUnformattedHTML] = useState("");
  const [formattedHTML, setFormattedHTML] = useState("");

  const handleFormat = (event) => {
    event.preventDefault();
    try {
      const formatted = html.prettyPrint(unformattedHTML);
      setFormattedHTML(formatted);
    } catch (error) {
      console.error("Error formatting HTML:", error);
    }
  };

  const handleCopy = () => {
    if (navigator.clipboard && formattedHTML) {
      navigator.clipboard.writeText(formattedHTML).then(
        () => {
          if(!toast.isActive("copy-toast")) {
            toast("Formatted HTML copied to clipboard! 📋", {
              toastId: "copy-toast",
              containerId: "copy-toast-container",
              autoClose: 2000,
            });
          }
        },
        (err) => {
          console.error("Could not copy text:", err);
        }
      );
    }
  };

  return (
    <Form className="mt-5" onSubmit={handleFormat}>
      <Form.Group className="mb-3" controlId="formBasicUnformattedHTML">
        <Form.Label className="text-cyan">Unformatted HTML Code 🤮</Form.Label>
        <Form.Control
          as="textarea"
          rows={10}
          placeholder="Put your spaghetti 🍝"
          value={unformattedHTML}
          onChange={(e) => setUnformattedHTML(e.target.value)}
          autoFocus={true}
        />
      </Form.Group>

      <ToastContainer containerId={'copy-toast-container'} />


      <button className="btn submit-btn-style" type="submit">
        Clean & Format & Kill Spans 🔫
      </button>

      <button
        className="btn copy-btn-style btn-dark btn-outline-light"
        type="button"
        onClick={handleCopy}
      >
        Copy to Clipboard 📋
      </button>

      <Form.Group className="mb-3 mt-3" controlId="formBasicFormattedHTML">
        <Form.Label className="text-cyan">Formatted HTML Code 😇</Form.Label>
        <Form.Control
          as="textarea"
          rows={10}
          value={formattedHTML}
          readOnly={true}
        />
      </Form.Group>
    </Form>
  );
}

export default FormatForm;
