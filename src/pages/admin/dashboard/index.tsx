import { useState } from "react";

import styles from "./Dashboard.module.css";
import { Blogs } from "./blogs";

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
      name: " Home - Testimonials",
      value: "HomeTestimonial",
    },
    {
      name: "Join Us - Testimonial",
      value: "JoinUsTestimonial",
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
      {/*  {activeComponent === "HomeTestimonial" && <HomeTestimonial />}
      {activeComponent === "JoinUsTestimonial" && <JoinUsTestimonial />}
      {activeComponent === "VolunteerDirectory" && <VolunteerDirectory />} */}
    </div>
  );
};
