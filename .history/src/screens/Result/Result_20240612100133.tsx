import React from "react";
import "./Result.css";

type Props = {};

const letter = [
  { label: "B", color: "#06D001" },
  { label: "C", color: "#ACD793" },
  { label: "D", color: "#ffd60a" },
  { label: "E", color: "#f8961e" },
  { label: "F", color: "#f3722c" },
  { label: "G", color: "#d90429" },
  { label: "A", color: "#059212" },
];

const Result: React.FC<Props> = (props) => {
  return (
    <div
      style={{
        maxWidth: 500,
        display: "flex",
        flexDirection: "column-reverse",
      }}
    >
      {letter.map((l, index) => (
        <ResultItem {...l} flex={(letter.length - index) / letter.length} />
      ))}
    </div>
  );
};

export default Result;

const ResultItem: React.FC<{ flex: number; label: string; color: string }> = ({
  flex,
  label,
  color,
}) => {
  return (
    <div>
      <div style={{ display: "flex", height: 50, marginBottom: "1rem" }}>
        <div
          style={{
            flex,
            backgroundColor: color,
            placeContent: "center",
            fontWeight: "bold",
            color: "white",
            padding: ".5rem",
          }}
        >
          {label}
        </div>
        <div style={{ backgroundColor: color }} className=" triangle"></div>
      </div>
    </div>
  );
};