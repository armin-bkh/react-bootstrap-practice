import { ButtonGroup } from "react-bootstrap";

const ButtonB = () => {
  return (
    <div>
      <ButtonGroup>
        <button className={`btn btn-primary`}>click</button>
        <button className={`btn btn-warning`}>click</button>
        <button className={`btn btn-secondary`}>click</button>
        <button className={`btn btn-light`}>click</button>
      </ButtonGroup>
    </div>
  );
};

export default ButtonB;
