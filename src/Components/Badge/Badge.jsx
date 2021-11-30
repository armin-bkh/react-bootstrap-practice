import { Badge } from "react-bootstrap";

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

const BadgeB = () => {
  return colors.map((color, i) => (
    <h1>
      Profile
      <Badge
        className={"m-2"}
        bg={color}
        text={color === "light" && "black"}
        pill
      >
        {i}
      </Badge>
    </h1>
  ));
};

export default BadgeB;
