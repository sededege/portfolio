import React, { useState } from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Container from "react-bootstrap/Container";
import logo from "../Assets/logo.png";
import Button from "react-bootstrap/Button";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { CgGitFork } from "react-icons/cg";
import { ImBlog } from "react-icons/im";
import {
  AiFillStar,
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
} from "react-icons/ai";
import { CgFileDocument } from "react-icons/cg";

function NavBar() {
  const [expand, updateExpanded] = useState(false);
  const [navColour, updateNavbar] = useState(false);
  const [menuu, setMenu] = useState("");
  const param = useLocation();
  console.log(param.pathname);
  const navigate = useNavigate();
  
  React.useEffect(() => {
    if (param.pathname === "/") {
      setMenu("Home");
    } 
    if (param.pathname === "/about") {
      setMenu("About me");
    } 
    if (param.pathname === "/project") {
      setMenu("Projects");
    } 
    if (param.pathname === "/creative") {
      setMenu("Creative");
    } 
    if (param.pathname === "/resume") {
      setMenu("CV");
    } 
  }, []);

  const menu = [
    {
      id: 0,
      name: "Home",
    },
    {
      id: 1,
      name: "About me",
    },
    {
      id: 2,
      name: "Projects",
    },
    {
      id: 3,
      name: "Creative",
    },
    {
      id: 4,
      name: "CV",
    },
  ];
  function scrollHandler() {
    console.log(window.scrollY )
    if (window.scrollY >= 20) {
      updateNavbar(true);
    } else {
      updateNavbar(false);
    }
  }

  console.log(menuu)
  window.addEventListener("scroll", scrollHandler);

  const where = (a) => {
    console.log(a);
    if (a === "Home") {
      navigate("/");
      setMenu("Home");

    }
    else if (a === "About me") {
      navigate("/about");
      setMenu("About me");

    }
    else if (a === "Projects") {
      navigate("/project");
      setMenu("Projects");

    }
    else if (a === "Creative") {
      navigate("/creative");
      setMenu("Creative");

    }
    else if (a === "CV") {
      navigate("/resume");
      setMenu("CV");

    }
  };
  return (
    <Navbar
      expanded={expand}
      fixed="top"
      expand="md"
      className={navColour ? "sticky" : "navbar"}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex  h-[20] items-center">
          <img src={logo} className="img-fluid logo" alt="brand" />
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="responsive-navbar-nav"
          onClick={() => {
            updateExpanded(expand ? false : "expanded");
          }}
        >
          <span></span>
          <span></span>
          <span></span>
        </Navbar.Toggle>
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto text-black" defaultActiveKey="#home">
            {menu.map((a) => (
              <Nav.Item>
                <Nav.Link
                  onClick={() => where(a.name)}
                  className="cursor-pointer"
                >
                  <p className={`${menuu === a.name ? 'text-blue-500 font-bold' : 'text-gray-400' } h-[10px] items-center hover:text-blue-500 hover:font-bold  `}>
                    {a.name}
                  </p>
                </Nav.Link>
              </Nav.Item>
            ))}

            {/*  <Nav.Item className="fork-btn">
              <Button
                href="https://github.com/soumyajit4419/Portfolio"
                target="_blank"
                className="fork-btn-inner"
              >
                <CgGitFork style={{ fontSize: "1.2em" }} />{" "}
                <AiFillStar style={{ fontSize: "1.1em" }} />
              </Button>
            </Nav.Item> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
