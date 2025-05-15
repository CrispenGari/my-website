import React from "react";
import { Routes as R, Route, BrowserRouter as Router } from "react-router-dom";
import { About, Email, Home, PageNotFound, Projects } from "../pages";
interface Props {}
const Routes: React.FC<Props> = () => {
  return (
    <Router>
      <R>
        <Route path="/" caseSensitive element={<Home />} />
        <Route path="/projects" caseSensitive element={<Projects />} />
        <Route path="/about" caseSensitive element={<About />} />
        <Route path="/email/:subject" caseSensitive element={<Email />} />
        <Route path="*" element={<PageNotFound />} caseSensitive />
      </R>
    </Router>
  );
};

export default Routes;
