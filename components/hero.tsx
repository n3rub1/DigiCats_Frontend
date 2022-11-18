import React from "react";
import Image from "next/image";
import hero from "../public/cat-hero.jpg";

export default function Hero() {
  return (
    <section className="hero-section">
      <Image
        className="hero-image"
        alt="Image of a cats' paw"
        src={hero}
      ></Image>
      <p className="hero-quote">
        "If you have a cat, there’s a good chance your camera roll is already
        full of photos of your furry feline. But that doesn’t mean there’s no
        room for a few more. And just like cat photos, there’s also always room
        for a cat quote or two."
      </p>
    </section>
  );
}
