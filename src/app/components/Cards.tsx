import Card from "./Card";
import "./cards.scss";
import cardsData from "./cardsData.json";
export default function Cards() {
  const content = cardsData.map((item, index) => (
    <Card key={item.id} props={{ ...item, index: index + 1 }} />
  ));

  return <div className="cardsWrapper">{content}</div>;
}
