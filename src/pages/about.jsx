import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import { Footer } from "src/components/Footer";

export default function About({
  text,
  array,
  handleChange,
  handleAdd,
  count,
  isShow,
  handleClick,
  handleDisplay,
}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Page</title>
      </Head>
      <Header />
      {isShow ? <h2>{count}</h2> : null}
      <button onClick={handleClick}>ボタン</button>
      <button onClick={handleDisplay}>{isShow ? "非表示" : "表示"}</button>
      <input type="text" value={text} onChange={handleChange} />
      <button onClick={handleAdd}>追加</button>
      <ol>
        {array.map((item) => {
          return <li key={item}>{item}</li>;
        })}
      </ol>
      <Main page="about" />
      <Footer />
    </div>
  );
}
