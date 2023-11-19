import React from "react";
import test from "../../../public/images/christmas_night_4-wallpaper-1920x1080.jpg";

interface ICard {
  id: string;
  title: string;
  description: string;
  img: string;
  index: number;
}
export default function Card({ props }: { props: ICard }) {
  const { id, index, title, description, img } = props;
  return (
    <div className="card">
      <input
        type="radio"
        name="slide"
        className="card--input"
        id={id}
        defaultChecked
      />
      <label
        htmlFor={id}
        className="card__body"
        style={{ backgroundImage: `url(${img})` }}
      >
        <div className="card__body__row">
          <div className="card__body__row--icon">{index}</div>
          <div className="card__body__row--description">
            <h4 className="text">{title}</h4>
            <p className="text">{description}</p>
          </div>
        </div>
      </label>
    </div>
  );
}
