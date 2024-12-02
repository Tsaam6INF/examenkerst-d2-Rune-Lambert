import React from "react";
import "./namenLijst.css";

type start = {
  naam: string;
  klassen: string[];
};

const starts: start[] = [
  { naam: "karel kleintjes", klassen: ["1A", "2A", "3STW"] },
  { naam: "Els Dotjes", klassen: ["1A", "2B", "3H"] },
];

type startsProps = {
  naam: string;
  klassen: string[];
};

const NaamKaart = ({ naam, klassen }: startsProps) => {
  return (
    <div className="kaart">
      <div className="titel">
        <h2>{naam}</h2>
      </div>
      <div className="genre">
        {klassen.map((g, index) => (
          <span key={index} className="genre-item">
            {g}
          </span>
        ))}
      </div>
    </div>
  );
};

const PersonenLijst: React.FC = () => {
  return (
    <div className="container">
      {starts.map((starts, index) => (
        <NaamKaart key={index} naam={starts.naam} klassen={starts.klassen} />
      ))}
    </div>
  );
};

export default PersonenLijst;
