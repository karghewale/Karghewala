import { About } from "./components/about";
import { Impact } from "./components/impact";
import { Landing } from "./components/landing";

type Props = {};

export const Home = (_props: Props) => {
  return (
    <div>
      <Landing />
      <About />
      <Impact />
    </div>
  );
};
