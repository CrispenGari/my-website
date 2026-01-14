import React from "react";
import { Routes as R, Route, BrowserRouter as Router } from "react-router-dom";
import Blog from "./Blog";
import NotFound from "./NotFound";

interface Props {}
const Routes: React.FC<Props> = () => {
  return (
    <Router>
      <R>
        <Route path="/" caseSensitive element={<Blog />} />
        <Route path="*" element={<NotFound />} caseSensitive />
      </R>
    </Router>
  );
};

export default Routes;
