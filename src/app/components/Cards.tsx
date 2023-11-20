"use client";
import { useState } from "react";
import Card from "./Card";
import "./cards.scss";
import cardsData from "./cardsData.json";
import useSwipe from "./useSwipe";
export default function Cards() {
  const [active, setActive] = useState<number>(cardsData.length);
  const content = cardsData.map((item, index) => (
    <Card
      key={item.id}
      item={item}
      index={index + 1}
      active={active === index + 1}
      setActive={setActive}
    />
  ));

  const handleSwipe = (direction: "left" | "right") => {
    direction === "left"
      ? active === cardsData.length
        ? setActive(1)
        : setActive(active + 1)
      : active === 1
      ? setActive(cardsData.length)
      : setActive(active - 1);
  };

  const swipeHandlers = useSwipe({
    onSwipedLeft: () => handleSwipe("left"),
    onSwipedRight: () => handleSwipe("right"),
  });

  return (
    <div className="cardsWrapper" {...swipeHandlers}>
      {content}
    </div>
  );
}
