import { useEffect } from "react";
import styles from "./index.module.css";
import { ArrowRight } from "../../../../assets/svg";
import videos from './Karuka-home-with-logo-white-bg.webp'
import data from '../../../../data/home.json'

export const Landing = () => {
  useEffect(() => {
    // Your DOM manipulation code here
    consoleText(
     data.landing.consoletxt,
      "text",
      ["#FDB5C0", "#FDB5C0", "#FDB5C0"]
    );
  }, []); 

  console.log(data.landing.consoletxt)

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
        <div>
          <h1>{data.landing.title}</h1>
          <h1 className={styles.consoleContainer}>
            <span id="text"></span>
            <div className={styles.consoleUnderscore} id="console">
              &#95;
            </div>
          </h1>
        </div>
        <p>
          {data.landing.description[1]}{" "}
          <span className="colorText">{data.landing.description[2]}</span>{data.landing.description[3]}{" "}
          <span className="colorText">
            {data.landing.description[4]}
          </span>
          {data.landing.description[5]}
        </p>
        <button>
          EXPLORE WEBSITE <ArrowRight />
        </button>
      </div>
      <img src={videos} alt="" />
    </div>
  );
};
