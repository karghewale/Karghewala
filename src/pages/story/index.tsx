import { Landing } from "./components/landing"
import { MissionVission } from "./components/missionVision"
import { Team } from "./components/team"


type Props = {}

export const Story = (_props: Props) => {
  return (
    <div>
      <Landing />
      <MissionVission />
      <Team />
    </div>
  )
}