import { Alert } from "react-bootstrap";

const colors = [
  "primary",
  "secondary",
  "success",
  "danger",
  "warning",
  "info",
  "light",
  "dark",
];

const AlertB = () => {
  return colors.map((color, i) => (
    <Alert key={i} variant={color}>
      <Alert.Heading>Alert component {color}</Alert.Heading>
      this is alert with {color} color!
      <Alert.Link href="#">an example link</Alert.Link>
    </Alert>
  ));
};

export default AlertB;
