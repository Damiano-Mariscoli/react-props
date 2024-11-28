import style from "./card.module.css";
export default function Card({ id, title, content, tags, image }) {
  return (
    <div className={style.card}>
      <img src={image || `https://picsum.photos/1`} alt="" />

      <div className={`${style.dFlex} ${style.flexColumn}`}>
        <h2>{title}</h2>
        <p>{`${content} ${tags}`}</p>
        <button>LEGGI DI PIÙ</button>
      </div>
    </div>
  );
}
