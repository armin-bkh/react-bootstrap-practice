import { Breadcrumb } from "react-bootstrap";

const path = ["courses", "react", "react-bootstrap"];

const BreadcrumbB = () => {
  return (
    <Breadcrumb>
      {path.map((item, i) => (
        <Breadcrumb.Item
          href={item !== "react-bootstrap" && `/${item}`}
          active={!item === "react-boostrap" && false}
        >
          {item}
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};

export default BreadcrumbB;
