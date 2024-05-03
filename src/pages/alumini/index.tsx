import { HeaderComponent } from "../../components/headerComponent";
import styles from "./index.module.css";
import { useEffect, useState } from "react";
import AluminiModal from "./components/aluminiModal";
import { supabase } from "../../utils/supabase";

export const Alumini = () => {
  const [data, setData] = useState<AluminiResponseType[]>([]);
  const [isMoalOpen, setIsModalOpen] = useState(false);
  const [aluminiData, setAluminiData] = useState<AluminiResponseType>();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    let { data: alumini, error } = await supabase.from("alumini").select("*");
    if (error) {
      console.log(error);
    } else if (alumini) {
      setData(alumini);
    }
  };

  return (
    <div className={styles.Wrapper}>
      <HeaderComponent colors="#FEE6E9" />
      <div className={styles.blogpageheading}>
        <h3>ALUMNI</h3>
        <p>
          A <span className="colorText">“</span>
          <span style={{ color: "#790416" }}>coming-of-age</span>
          <span className="colorText">”</span> story, where our weaver artisans
          dream of overcoming neatly stacked odds to realize their potential as
          <span style={{ color: "#790416" }}>&nbsp;proud ambassadors</span> of
          the Indian handloom weaving tradition :)
        </p>
      </div>
      <div className={styles.content}>
        {data?.map((item, index) => {
          return (
            <div
              className={styles.alumini}
              key={index}
              onClick={() => {
                setIsModalOpen(true);
                setAluminiData(item);
              }}
            >
              <img src={item.image} alt={item.name} />
              <div className={styles.text}>
                <h2>{item.name}</h2>
                <p>₹{item.salary}/month</p>
              </div>
            </div>
          );
        })}
      </div>
      <AluminiModal
        isOpen={isMoalOpen}
        onClose={() => setIsModalOpen(false)}
        data={aluminiData!}
      />
    </div>
  );
};
