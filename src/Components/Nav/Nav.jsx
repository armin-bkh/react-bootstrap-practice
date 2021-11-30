import {
  Nav,
  NavItem,
  NavLink,
  Dropdown,
  Navbar,
  Form,
  FormControl,
  Button,
  Offcanvas,
} from "react-bootstrap";

const nav = [
  { title: "home", to: "/", eventKey: "link-1" },
  { title: "services", to: "/services", eventKey: "link-2" },
  { title: "contact", to: "/contact", eventKey: "link-3" },
];

const NavB = () => {
  return (
    // <Navbar sticky="top" bg="light" expand="lg">
    //   <Navbar.Brand href="/">Armin</Navbar.Brand>
    //   <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //   <Navbar.Collapse className={"p-2 p-lg-0 justify-content-between"}>
    //     <Nav
    //       className={"mt-3 mt-lg-0"}
    //       variant="pills"
    //       activeKey="/"
    //       onSelect={(selectedKey) => console.log(selectedKey)}
    //     >
    //       {nav.map((item) => (
    //         <Nav.Item key={item.to}>
    //           <Nav.Link
    //             href={item.to}
    //             active={item.to === "/" && true}
    //             eventKey={item.eventKey}
    //           >
    //             {item.title}
    //           </Nav.Link>
    //         </Nav.Item>
    //       ))}
    //       <Dropdown as={NavItem}>
    //         <Dropdown.Toggle as={NavLink}>Click to see more…</Dropdown.Toggle>
    //         <Dropdown.Menu>
    //           <Dropdown.Item>Hello there!</Dropdown.Item>
    //           <Dropdown.Item>Hello there!</Dropdown.Item>
    //           <Dropdown.Item>Hello there!</Dropdown.Item>
    //           <Dropdown.Item>Hello there!</Dropdown.Item>
    //         </Dropdown.Menu>
    //       </Dropdown>
    //     </Nav>
    //     <Form className="d-flex mt-2 mt-lg-0">
    //       <FormControl
    //         type="search"
    //         placeholder="Search"
    //         className="me-2"
    //         aria-label="Search"
    //       />
    //       <Button variant="outline-success">Search</Button>
    //     </Form>
    //   </Navbar.Collapse>
    // </Navbar>

    <Navbar sticky="top" bg="light" expand="false">
      <Navbar.Brand href="/">Armin</Navbar.Brand>
      <Navbar.Toggle aria-controls="offcanvasNavbar" />
      <Navbar.Offcanvas className={"p-2 p-lg-0 justify-content-between"}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title id="offcanvasNavbarLabel">Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav
            className={"mt-3 mt-lg-0"}
            variant="pills"
            activeKey="/"
            onSelect={(selectedKey) => console.log(selectedKey)}
          >
            {nav.map((item) => (
              <Nav.Item key={item.to}>
                <Nav.Link
                  href={item.to}
                  active={item.to === "/" && true}
                  eventKey={item.eventKey}
                >
                  {item.title}
                </Nav.Link>
              </Nav.Item>
            ))}
            <Dropdown as={NavItem}>
              <Dropdown.Toggle as={NavLink}>Click to see more…</Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item>Hello there!</Dropdown.Item>
                <Dropdown.Item>Hello there!</Dropdown.Item>
                <Dropdown.Item>Hello there!</Dropdown.Item>
                <Dropdown.Item>Hello there!</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Nav>
          <Form className="d-flex mt-2 mt-lg-0">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Offcanvas.Body>
      </Navbar.Offcanvas>
    </Navbar>
  );
};

export default NavB;
