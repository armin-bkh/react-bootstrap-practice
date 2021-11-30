import { CloseButton } from "react-bootstrap";

const CloseButtonB = () => {
  return (
    <CloseButton onClick={() => console.log("closed")} aria-label="close" />
  );
};

export default CloseButtonB;
