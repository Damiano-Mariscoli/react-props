import style from "./card.module.css";
export default function Card(props) {
  return (
    <div className={style.card}>
      {console.log(props)}
      <img src="https://dummyimage.com/600x400/000/fff" alt="" />

      <div className={`${style.dFlex} ${style.flexColumn}`}>
        <h2>{props.title}</h2>
        <p>{`${props.content} ${props.tags}`}</p>
        <button>LEGGI DI PIÙ</button>
      </div>
    </div>
  );
}
