import { Footer } from "../../components/footer";
import { Navbar } from "../../components/navbar";

type Props = {};

export const Home = (_props: Props) => {
  return (
    <div>
      <Navbar />
      <Footer />
    </div>
  );
};
