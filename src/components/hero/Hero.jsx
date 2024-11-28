import style from "./Hero.module.css";
import Card from "../card/card.jsx";
import { posts } from "../../assets/posts.js";
export default function Main() {
  return (
    <>
      <div className={`${style.dFlex}  ${style.flexCenter}`}>
        <div className={style.containerMd}>
          <div className={`${style.row} ${style.flexCenter}`}>
            {posts.map((post) => (
              <>
                <div className={style.col6}>
                  <Card
                    title={post.title}
                    content={post.content}
                    tags={post.tags}
                  />
                </div>
              </>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
