import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hola! Soy <span className="purple">Sebastián González</span>, tengo 25 años y en nací <span className="purple"> Montevideo, Uruguay.</span>
            <br /> Soy Licenciado en Diseño multimedia graduado en la <span className="purple">Universidad ORT Uruguay.</span>
            <br />
            <br />
            Además de diseñar y programar tengo como hobbie
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Entrenar Crossfit 🏋🏻
            </li>
            <li className="about-activity">
              <ImPointRight /> Jugar al fútbol 11 ⚽️
            </li>
            <li className="about-activity">
              <ImPointRight /> Jugar videojuegos 🎮
            </li>
            <li className="about-activity">
              <ImPointRight /> Tradear NFT's en la red de Solana 🌄
            </li>
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
