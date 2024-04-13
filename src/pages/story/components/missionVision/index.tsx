import { Impact } from "../../../home/components/impact";
import styles from "./index.module.css";
import graph from './graph.png'

type Props = {};

export const MissionVission = (_props: Props) => {
  return (
    <div className={styles.Wrapper}>
      <div className={styles.ToperSection}>
        <div className={styles.Mission}>
          <h2>MISSION</h2>
          <p>
            Our mission is to empower the creators of our textiles. This
            talented community of young and aspiring weaver entrepreneurs, so
            that they can{" "}
            <span className="colorText">build robust businesses</span>. What
            differentiates us is the belief that{" "}
            <span className="colorText">
              weavers are equal partners in the business
            </span>
            , not mere wage workers who will weave the said design and be paid
            per meter wages. We believe in the agency of artisans to transcend
            impediments in traditional value chains to co-create, manage
            business, and sell the final products directly to the end consumer.
          </p>
        </div>
        <Impact />
      </div>

      <div className={styles.Vission}>
        <h2>VISION</h2>
        <p>
          Karghewale’s vision is to create an enabling creative crafts ecosystem
          wherein any artisan with entrepreneurial dreams finds all the
          resources at her disposal to make her transition from a wage worker to
          an artisan entrepreneur. This is how Karghewale envisions its impact
          at scale.
        </p>
      </div>
      <img src={graph} alt="" />
    </div>
  );
};
