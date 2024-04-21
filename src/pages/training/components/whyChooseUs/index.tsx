import { CardComponent } from '../../../../components/contentCard';
import styles from './index.module.css'
import { Empowerment, Ethical, Market } from './svg';

type Props = {}

export const WhyChooseUs = (_props: Props) => {
      const data = [
        {
          icon: <Market />,
          title: "Market Connections",
          para: "We understand the importance of establishing market connections in the creative industry. Through our extensive network of partners and collaborators, we help artisans showcase their work to a global audience and connect with potential buyers and retailers.",
        },
        {
          icon: <Empowerment />,
          title: "Empowerment and Recognition",
          para: "We believe in giving artisans the recognition they deserve for their unique designs and cultural heritage. Our program is designed to empower artisans to take ownership of their creativity and establish their own distinct design and brand identity.",
        },
        {
          icon: <Ethical />,
          title: "Ethical and Sustainable Practices",
          para: "At Karghewale Karuka Foundation, we are committed to promoting ethical & sustainable practices in the creative industry. We prioritize fair trade principles, environmental stewardship, & social responsibility, ensuring that artisans  & their communities thrive in a responsible manner.",
        },
      ];
  return (
    <div className={styles.Wrapper}>

        <h2>What We Offer</h2>
        <div className={styles.cards}>
          {data.map((item, index) => (
            <CardComponent
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.para}
            />
          ))}
        </div>
   
    </div>
  );
}