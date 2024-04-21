import { Landing } from "./components/landing"
import { MissionVission } from "./components/missionVision"
import { QuickLinks } from "./components/quicklinks"
import { Team } from "./components/team"


type Props = {}

export const Story = (_props: Props) => {
  return (
    <div>
      <Landing />
      <MissionVission />
      <Team />
      <QuickLinks />
    </div>
  )
}