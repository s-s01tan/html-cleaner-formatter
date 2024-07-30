import React from "react";
import "./Homepage.css";
import FormatForm from "../../components/FormatForm/FormatForm";
import { ToastContainer } from "react-bootstrap";

const Homepage = () => {
  return (
    <div className="container">
      <FormatForm />
      <ToastContainer id="main" position="bottom-center" draggable={true} />
    </div>
  );
};

export default Homepage;
