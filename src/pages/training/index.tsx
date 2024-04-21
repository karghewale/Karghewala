import { HeaderComponent } from "../../components/headerComponent"
import { Landing } from "./components/landing";

type Props = {}

export const Training = (_props: Props) => {
  return (
    <div>
      <HeaderComponent colors="#FEE6E9" />
      <Landing />
    </div>
  );
}