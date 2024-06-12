import React from "react";
import "./Result.css";

type Props = {};

const letter = [{ label: "A" }, { label: "A" }, { label: "A" }, { label: "A" }];

const Result: React.FC<Props> = (props) => {
  return (
    <div>
      {letter.map((l, index) => (
        <ResultItem flex={(letter.length - index) / letter.length} />
      ))}
    </div>
  );
};

export default Result;

const ResultItem: React.FC<{ flex: number }> = ({ flex }) => {
  return (
    <div>
      <div style={{ display: "flex", height: 90, border: "solid" }}>
        <div style={{ flex }} className="shape"></div>
        <div className=" shape triangle"></div>
      </div>
    </div>
  );
};