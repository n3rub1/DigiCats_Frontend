import React from "react";
import Carousel from "better-react-carousel";

export default function MainContent() {
  return (
    <main>
      <div className="mainContent_header">
        <h1>Sponser A Cat</h1>
        <p>View all</p>
      </div>
      <Carousel cols={3} rows={1} gap={10} autoplay={1000} >
        <Carousel.Item>
          <img width="100%" src="https://picsum.photos/800/600?random=1" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src="https://picsum.photos/800/600?random=2" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src="https://picsum.photos/800/600?random=3" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src="https://picsum.photos/800/600?random=3" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src="https://picsum.photos/800/600?random=3" />
        </Carousel.Item>
        <Carousel.Item>
          <img width="100%" src="https://picsum.photos/800/600?random=3" />
        </Carousel.Item>
        {/* ... */}
      </Carousel>
    </main>
  );
}
