import { useEffect } from "react";
import styles from "./index.module.css";

type Props = {};


export const Landing = (_props: Props) => {
  useEffect(() => {
    // Your DOM manipulation code here
    consoleText(
      [
        "A curtailed agency",
        "Awakening a generation",
        "Reviving a craft culture",
      ],
      "text",
      ["#FDB5C0", "#FDB5C0", "#FDB5C0"]
    );
  }, []); 

  function consoleText(words: string[], id: string, colors?: string[]): void {
    if (colors === undefined) colors = ["#fff"];
    var visible = true;
    var con = document.getElementById("console");
    var letterCount = 1;
    var x = 1;
    var waiting = false;
    var target = document.getElementById(id) as HTMLElement; // Type assertion
    target.style.color = colors[0];
    window.setInterval(function () {
      if (letterCount === 0 && waiting === false) {
        waiting = true;
        target.innerHTML = words[0].substring(0, letterCount);
        window.setTimeout(function () {
          const usedColor = colors.shift()!;
          colors!.push(usedColor);
          const usedWord = words.shift()!;
          words.push(usedWord);
          x = 1;
          target.style.color = colors![0]; // Non-null assertion for colors
          letterCount += x;
          waiting = false;
        }, 1000);
      } else if (letterCount === words[0].length + 1 && waiting === false) {
        waiting = true;
        window.setTimeout(function () {
          x = -1;
          letterCount += x;
          waiting = false;
        }, 1000);
      } else if (waiting === false) {
        target.innerHTML = words[0].substring(0, letterCount);
        letterCount += x;
      }
    }, 120);
    window.setInterval(function () {
      if (visible === true) {
        con!.className = styles.consoleUnderscore + " hidden"; 
        visible = false;
      } else {
        con!.className = styles.consoleUnderscore;
        visible = true;
      }
    }, 400);
  }

  return (
    <div className={styles.Wrapper}>
      <div>
        <h1>the STORY of </h1>
        <h1 className={styles.consoleContainer}>
          <span id="text"></span>
          <div className={styles.consoleUnderscore} id="console">
            &#95;
          </div>
        </h1>
      </div>
      <p>
        This talented community of young and aspiring weaver entrepreneurs, so
        that they can <span className="colorText">build robust businesses</span>
        . What differentiates us is the belief that{" "}
        <span className="colorText">
          weavers are equal partners in the business
        </span>
        , not mere wage workers who will weave the said design and be paid per
        meter wages. We believe in the agency of artisans to transcend
        impediments in traditional value chains to co-create, manage business,
        and sell the final products directly to the end consumer.
      </p>
      <a href="#about" className={styles.homeButtonNav}>
        <span className={[styles.m_scroll_arrows, styles.unu].join(" ")}></span>
        <span className={[styles.m_scroll_arrows, styles.doi].join(" ")}></span>
        <span
          className={[styles.m_scroll_arrows, styles.trei].join(" ")}
        ></span>
      </a>
    </div>
  );
};
