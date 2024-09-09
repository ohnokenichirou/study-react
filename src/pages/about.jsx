import Head from "next/head";
import styles from "src/styles/Home.module.css";
import { Header } from "src/components/Header";
import { Main } from "src/components/Main";
import { Footer } from "src/components/Footer";

const About = ({
  text,
  array,
  handleChange,
  handleAdd,
  doubleCount,
  isShow,
  handleClick,
  handleDisplay,
}) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>About Page</title>
      </Head>
      <Header />
      {isShow ? <h2>{doubleCount}</h2> : null}
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
};

export default About;
