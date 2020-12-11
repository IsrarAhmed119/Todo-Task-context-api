import React from "react";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import NavDropdown from "react-bootstrap/NavDropdown";

const data = {
  module_type: "menu",
  title: "My Site",
  menu: [
    {
      link: "/home",
      title: "Home",
    },
    {
      link: "#",
      title: "Fruit",
      menu: [
        {
          link: "/apples",
          title: "Apples",
        },
        {
          link: "/bananas",
          title: "Bananas",
        },
        {
          link: "/kiwi",
          title: "Kiwi",
        },
        {
          link: "/pears",
          title: "Pears",
        },
      ],
    },
    {
      link: "#",
      title: "Vegetables",
      menu: [
        {
          link: "/carrots",
          title: "Carrots",
        },
        {
          link: "/celery",
          title: "Celery",
        },
        {
          link: "/potatoes",
          title: "Potatoes",
        },
        {
          link: "#",
          title: "More",
          menu: [
            {
              link: "/thirdlevel1",
              title: "3rd level menu",
            },
            {
              link: "/thirdlevel2",
              title: "3rd level two",
            },
          ],
        },
      ],
    },
    {
      link: "/about",
      title: "About",
    },
    {
      link: "/contact",
      title: "Contact",
    },
  ],
};
const MultilevelDropdown = () => {
  ///////////////---------------------------------- my code here.........

  const SuperMenu = ({ data }) => {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="/home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          {data.menu.map((item, index) => {
            // console.log("item----------", item);
            return (
              <Nav key={index} className="mr-auto">
                <Nav.Link href="testform">{item.title}</Nav.Link>
                {item.menu ? (
                  // <Nav.Link href="testform">ok</Nav.Link>
                  <DropDownMenu data={item.menu} />
                ) : null}
              </Nav>
            );
          })}
        </Navbar.Collapse>
      </Navbar>
    );
  };
  const DropDownMenu = ({ data }) => {
    console.log("data------->>", data);
    return (
      <NavDropdown title={data.title} id="collasible-nav-dropdown" drop="down">
        {data.map((item, index) => {
          return (
            <NavDropdown.Item href="" key={index}>
              {item.title}
            </NavDropdown.Item>
          );
        })}
      </NavDropdown>
    );
  };

  return (
    <>
      <h1>MultilevelDropdown-----compo-------</h1>

      <div className="DropDowndiv"></div>
      <SuperMenu data={data} />

      <hr />
      <h1>MultilevelDropdown-----compo-------</h1>
      <h1>MultilevelDropdown-----compo-------</h1>
      <h1>MultilevelDropdown-----compo-------</h1>
      <h1>MultilevelDropdown-----compo-------</h1>
    </>
  );
};

export default MultilevelDropdown;
