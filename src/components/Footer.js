import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <div className="text-[1rem] hidden md:flex justify-between px-[4em] items-center h-20">
      <h3 className="text-black text-[0.9rem]" >Designed by Sebastián González</h3>

      <h3 className="text-black  text-[0.9rem]">Copyright © {year} SG</h3>

      <ul className="gap-4 items-center flex">
        <li className=" shadow-md p-2 rounded-full ">
          <a
            href="https://github.com/sededege"
            className="text-blue-500  "
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillGithub />
          </a>
        </li>

        <li className=" shadow-md p-2 rounded-full ">
          <a
            className=" text-blue-500  "
            href="https://www.linkedin.com/in/sebagtech/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn />
          </a>
        </li>
        <li className=" shadow-md p-2 rounded-full">
          <a
            className="text-blue-500  "
            href="https://www.instagram.com/sebagtech"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AiFillInstagram />
          </a>
        </li>
      </ul>
    </div>
  );
}

export default Footer;
