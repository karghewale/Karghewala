import { HeaderComponent } from "../../components/headerComponent"
import { Landing } from "./components/landing";
import { WhatWeOffer } from "./components/whatWeOffer";

type Props = {}

export const Training = (_props: Props) => {
  return (
    <div>
      <HeaderComponent colors="#FEE6E9" />
      <Landing />
      <WhatWeOffer />
    </div>
  );
}