import { Dropdown, DropdownButton, ButtonGroup, Button } from "react-bootstrap";

const menu = ["home", "services", "contact"];

const DropdownB = () => {
  return (
    // <Dropdown>
    //   <Dropdown.Toggle variant="primary" id="dropdown-basic">
    //     menu
    //   </Dropdown.Toggle>
    //   <Dropdown.Menu>
    //     {menu.map((item, i) => (
    //       <Dropdown.Item key={i}>{item}</Dropdown.Item>
    //     ))}
    //   </Dropdown.Menu>
    // </Dropdown>

    // <DropdownButton id="dropdown-basic-button" title="menu">
    //   {menu.map((item, i) => (
    //     <Dropdown.Item key={i}>{item}</Dropdown.Item>
    //   ))}
    // </DropdownButton>

    <Dropdown as={ButtonGroup}>
      <Button variant="success">Split Button</Button>

      <Dropdown.Toggle split variant="success" id="dropdown-split-basic" />

      <Dropdown.Menu>
        <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
        <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
        <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>
  );
};

export default DropdownB;
