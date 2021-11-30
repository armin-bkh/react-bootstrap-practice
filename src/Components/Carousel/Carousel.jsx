import { Carousel } from "react-bootstrap";

const carouselItems = [
  {
    img: "https://user-images.githubusercontent.com/42708686/121468850-160d7900-c9d9-11eb-9cc2-b3db7bb52df3.png",
    title: "title #1",
    body: "react-bootstrap practice",
  },
  {
    img: "https://user-images.githubusercontent.com/42708686/121468850-160d7900-c9d9-11eb-9cc2-b3db7bb52df3.png",
    title: "title #2",
    body: "react-bootstrap practice",
  },
  {
    img: "https://user-images.githubusercontent.com/42708686/121468850-160d7900-c9d9-11eb-9cc2-b3db7bb52df3.png",
    title: "title #3",
    body: "react-bootstrap practice",
  },
  {
    img: "https://user-images.githubusercontent.com/42708686/121468850-160d7900-c9d9-11eb-9cc2-b3db7bb52df3.png",
    title: "title #4",
    body: "react-bootstrap practice",
  },
];

const CarouselB = () => {
  return (
    <Carousel>
      {carouselItems.map((item, i) => (
        <Carousel.Item key={i}>
          <img className={`d-block w-100`} src={item.img} alt={item.title} />
          <Carousel.Caption>
            <h1>{item.title}</h1>
            <p>{item.body}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default CarouselB;
