import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App";

import Header from "./Components/navigationbar";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App name="gtb" surname="hope"></App>
    <App></App>
    <App></App>
    <Message></Message> */}
    <Header />
    <AboutMe />
    <Projects />
    <Contact />
  </React.StrictMode>
);
