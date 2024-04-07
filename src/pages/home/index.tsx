import { About } from "./components/about";
import { Landing } from "./components/landing";

type Props = {};

export const Home = (_props: Props) => {
  return (
    <div>
      <Landing />
      <About />
    </div>
  );
};
