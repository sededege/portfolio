import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <div className="text-gray-500 shadow-md p-8 rounded-lg">
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello! I'm <span className="text-blue-500 font-bold">Sebastián González</span>,  am 25 years old and I was born in<span className="purple"> Montevideo, Uruguay.</span>
            <br /> I have a degree in Multimedia Design graduated from
 <span className="text-blue-500 font-bold"> ORT Uruguay University.</span>
            <br />
            <br />
            In addition to designing and programming, I have as a hobby          </p>
          <ul>
            <li className="about-activity flex gap-2">
               👉🏻 Training Crossfit 🏋🏻

            </li>
            <li className="about-activity flex gap-2">
            👉🏻 Play soccer 11 ⚽️

            </li>
            <li className="about-activity flex gap-2">
            👉🏻 Play video games 🎮
            </li>
           {/*  <li className="about-activity">
              <ImPointRight /> Tradear NFT's en la red de Solana 🌄
            </li> */}
          </ul>

          {/* <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer> */}
        </blockquote>
     </div>
  );
}

export default AboutCard;
