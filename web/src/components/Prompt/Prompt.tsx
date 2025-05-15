import React from "react";
import "./Prompt.css";
interface Props {}
const Prompt: React.FC<Props> = () => {
  return (
    <div className="prompt">
      <p>
        "Building <span>brains</span> from scratch using <span>Artificial</span>
        <span>Neural</span> <span>Networks.</span>"
      </p>
    </div>
  );
};

export default Prompt;
