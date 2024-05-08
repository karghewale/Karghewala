import { useState } from "react";

import styles from "./Dashboard.module.css";
import { Blogs } from "./blogs";
import { GalleryAdmin } from "./gallery";
import { Testimonialsdmin } from "./testimonials";

type Props = {};

export const Dashboard = (_props: Props) => {
  const [activeComponent, setActiveComponent] =
    useState<string>("VolunteerDirectory");
  const data = [
    {
      name: "Blogs",
      value: "Blogs",
    },
    {
      name: "Gallery",
      value: "Gallery",
    },
    {
      name: "Testimonials",
      value: "Testimonials",
    },
    {
      name: "Join Us - VolunteerDirectory",
      value: "VolunteerDirectory",
    },
  ];
  return (
    <div className={styles.AdminDashboard}>
      <div className={styles.head}>
        <h1>AdminDashboard</h1>
        <a href="/home">Back To Home</a>
      </div>
      <div className={styles.buttonWrapper}>
        {data.map(({ name, value }) => {
          return (
            <button
              style={{
                backgroundColor:
                  activeComponent == value ? "#034852" : "#667085",
              }}
              onClick={() => setActiveComponent(value)}
            >
              {name}
            </button>
          );
        })}
      </div>
      {activeComponent === "Blogs" && <Blogs />}
      {activeComponent === "Gallery" && <GalleryAdmin />}
      {activeComponent === "Testimonials" && <Testimonialsdmin />}
      {/*  {activeComponent === "VolunteerDirectory" && <VolunteerDirectory />} */}
    </div>
  );
};
