import { Accordion } from "react-bootstrap";

const acc = [
  {
    header: "Accordion Item #1",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod \
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim \
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea \
    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate \
    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat \
    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id \
    est laborum.",
    eventKey: "0",
  },
  {
    header: "Accordion Item #2",
    body: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod \
    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim \
    veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea \
    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate \
    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat \
    cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id \
    est laborum.",
    eventKey: "1",
  },
];

const AccordionB = () => {
  return (
    <Accordion flush defaultActiveKey="1">
      {acc.map((acItem) => (
        <Accordion.Item key={acItem.eventKey} eventKey={acItem.eventKey}>
          <Accordion.Header>{acItem.header}</Accordion.Header>
          <Accordion.Body>{acItem.body}</Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
};

export default AccordionB;
