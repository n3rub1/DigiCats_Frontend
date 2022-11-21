import React from "react";
import Carousel from "better-react-carousel";

export default function MainContent() {
  return (
    <main>
      <div className="mainContent_header">
        <h1>Sponsor A Cat</h1>
        <p>View all</p>
      </div>
      <div className="carousel_container">
        <Carousel cols={3} rows={1} gap={50}>
          <Carousel.Item>
            <img
              className="carousel_img"
              src="https://picsum.photos/800/600?random=1"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel_img"
              src="https://picsum.photos/800/600?random=2"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel_img"
              src="https://picsum.photos/800/600?random=3"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel_img"
              src="https://picsum.photos/800/600?random=3"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel_img"
              src="https://picsum.photos/800/600?random=3"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="carousel_img"
              src="https://picsum.photos/800/600?random=3"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </main>
  );
}
