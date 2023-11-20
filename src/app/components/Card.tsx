interface ICard {
  item: {
    id: string;
    title: string;
    description: string;
    img: string;
  };
  index: number;
  active: boolean;
  setActive: (value: number) => void;
}
export default function Card(props: ICard) {
  const { index, active, setActive, item } = props;
  return (
    <div className={active ? "card card--active" : "card"}>
      <input
        type="radio"
        name="slide"
        className="card--input"
        id={item.id}
        defaultChecked
        onChange={() => setActive(index)}
      />
      <label
        htmlFor={item.id}
        className="card__body"
        style={{
          backgroundImage: `url(${item.img})`,
          backgroundPosition: "center",
        }}
      >
        <div className="card__body__row">
          <div className="card__body__row--icon">{index}</div>
          <div className="card__body__row--description">
            <h4 className="text">{item.title}</h4>
            <p className="text">{item.description}</p>
          </div>
        </div>
      </label>
    </div>
  );
}
