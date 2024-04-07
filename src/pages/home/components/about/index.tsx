import styles from './index.module.css'
type Props = {}

export const About = (_props: Props) => {
  return (
    <div className={styles.Wrapper} id="about">
      <div>
        <h2>THE PROBLEM</h2>
        <p>
          The status of the weaver as an artisan who has complete creative
          control of their work is relegated to that of a hand-worker, one who
          simply executes a predefined set of instructions that are relayed to
          them.
        </p>
      </div>
      <div>
        <h2>The Cause</h2>
        <p>
          The handmade manufacturing model unintentionally ended up creating a
          separation of concept and design from execution that severely curtails
          the creative agency of weaver artisans.
        </p>
      </div>{" "}
      <div>
        <h2>The SOLUTION</h2>
        <p>
          A six-month free training program focusing on developing their skills
          as creative entrepreneurs followed by a 3-year incubation period. Our
          goal is to assist artisans by establishing market connections and
          giving them rightful credit for their unique designs, helping them
          establish their own distinct design and brand identity.
        </p>
      </div>
    </div>
  );
}