import { About } from "./components/about";
import { Impact } from "./components/impact";
import { Landing } from "./components/landing";
import { Program } from "./components/program";
import { Testimonial } from "./components/testimonials";

type Props = {};

export const Home = (_props: Props) => {
  return (
    <div>
      <Landing />
      <About />
      <Impact />
      <Program />
      <Testimonial />
    </div>
  );
};
