import React from "react";
import "./App.css";
import Routes from "./routes";
interface Props {}
const App: React.FC<Props> = ({}) => {
  return (
    <div className="app">
      <Routes />
    </div>
  );
};
export default App;
