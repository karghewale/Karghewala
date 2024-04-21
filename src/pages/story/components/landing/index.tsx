import styles from './index.module.css'
import contextimg from './assets/contextimg.png'
import { HeaderComponent } from '../../../../components/headerComponent'
import { Marquees } from './marquee/marquee'

type Props = {}

export const Landing = (_props: Props) => {
  return (
    <div className={styles.Wrapper}>
      <HeaderComponent colors='#FEE6E9' />
      <div className={styles.story}>
        <h3>Our Story</h3>
        <p>
          A <span className="colorText">“</span>
          <span style={{ color: "#790416" }}>coming-of-age</span>
          <span className="colorText">”</span> story, where our weaver artisans
          dream of overcoming neatly stacked odds to realize their potential as
          <span style={{ color: "#790416" }}>&nbsp;proud ambassadors</span> of the
          Indian handloom weaving tradition :)
        </p>
      </div>
      <Marquees />
      <div>
        <h2>The CONTEXT</h2>
        <p>
          From an intimately known market to middle-layer driven value chains,
          the design agency shifted from artisans totally to the added layers,
          making artisans mere implementation centres. The middle-layer driven
          value chains continue to exist and thrive today. Here, the weaver
          artisans are having to trade their labour to produce textiles, without
          much creative agency in the process, links their earnings to their
          labour, not so much their skill.
        </p>
      </div>
      <img src={contextimg} alt="" />
      <p>
        Even in fair trade, labour wages are more likely to be subsistence, than
        attractive; leading to the younger generation of weavers leaving the
        craft to try their fortunes at more fashionable vocations. A story of
        severely curtailed creative agency of artisans brought on by a sheer
        predominance of handmade manufacturing-based interventions.
      </p>
    </div>
  );
}