import { HeaderComponent } from "../../components/headerComponent";
import { Testimonial } from "../home/components/testimonials";
import { Banner } from "./components/banner";
import { Gallery } from "./components/gallery";
import { Landing } from "./components/landing";
import { WhatWeOffer } from "./components/whatWeOffer";

type Props = {};

export const Training = (_props: Props) => {
  return (
    <div>
      <HeaderComponent colors="#FEE6E9" />
      <Landing />
      <WhatWeOffer />
      <Banner />
      <Testimonial />
      <Gallery />
    </div>
  );
};
