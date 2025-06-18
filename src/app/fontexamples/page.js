import {
  Baskervville,
  Domine,
  Lato,
  Libre_Baskerville,
  Libre_Franklin,
  Newsreader,
  Noto_Serif,
  Roboto,
} from "next/font/google";
import styles from "./examples.module.css";

const lato = Lato({
  weight: ["300", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const roboto = Roboto({
  weight: "variable",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const franklin = Libre_Franklin({
  weight: "variable",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const notoSerif = Noto_Serif({
  weight: "variable",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const domine = Domine({
  weight: "variable",
  subsets: ["latin"],
});

const newsreader = Newsreader({
  weight: "variable",
  style: ["normal", "italic"],
  subsets: ["latin"],
});

const libreBaskerville = Libre_Baskerville({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
});

export default function ExamplePage() {
  return (
    <div className={styles.container}>
      <p>
        Nunito Sans - figure actually noir
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
        <strong>Sapiente eveniet amet cum at natus</strong> sit similique alias
        vitae minus molestias, eos excepturi distinctio consectetur.{" "}
        <em>Dicta asperiores perferendis eligendi reprehenderit accusamus</em>?
      </p>
      <hr className="m-4" />
      <p className={lato.className}>
        Lato - figure actually noir
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
        <strong>Sapiente eveniet amet cum at natus</strong> sit similique alias
        vitae minus molestias, eos excepturi distinctio consectetur.{" "}
        <em>Dicta asperiores perferendis eligendi reprehenderit accusamus</em>?
      </p>
      <hr className="m-4" />
      <p className={roboto.className}>
        Roboto - figure actually noir
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
        <strong>Sapiente eveniet amet cum at natus</strong> sit similique alias
        vitae minus molestias, eos excepturi distinctio consectetur.{" "}
        <em>Dicta asperiores perferendis eligendi reprehenderit accusamus</em>?
      </p>
      <hr className="m-4" />
      <p className={franklin.className}>
        Franklin - figure actually noir
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
        <strong>Sapiente eveniet amet cum at natus</strong> sit similique alias
        vitae minus molestias, eos excepturi distinctio consectetur.{" "}
        <em>Dicta asperiores perferendis eligendi reprehenderit accusamus</em>?
      </p>
      <hr className="m-4" />
      <p className={notoSerif.className}>
        Noto Serif - figure actually noir
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
        <strong>Sapiente eveniet amet cum at natus</strong> sit similique alias
        vitae minus molestias, eos excepturi distinctio consectetur.{" "}
        <em>Dicta asperiores perferendis eligendi reprehenderit accusamus</em>?
      </p>
      <hr className="m-4" />
      <p className={domine.className}>
        Domine - figure actually noir
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
        <strong>Sapiente eveniet amet cum at natus</strong> sit similique alias
        vitae minus molestias, eos excepturi distinctio consectetur.{" "}
        <em>Dicta asperiores perferendis eligendi reprehenderit accusamus</em>?
      </p>
      <hr className="m-4" />
      <p className={newsreader.className}>
        Newsreader - figure actually noir
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
        <strong>Sapiente eveniet amet cum at natus</strong> sit similique alias
        vitae minus molestias, eos excepturi distinctio consectetur.{" "}
        <em>Dicta asperiores perferendis eligendi reprehenderit accusamus</em>?
      </p>
      <hr className="m-4" />
      <p className={libreBaskerville.className}>
        Libre Baskerville - figure actually noir
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit.{" "}
        <strong>Sapiente eveniet amet cum at natus</strong> sit similique alias
        vitae minus molestias, eos excepturi distinctio consectetur.{" "}
        <em>Dicta asperiores perferendis eligendi reprehenderit accusamus</em>?
      </p>
    </div>
  );
}
