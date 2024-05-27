import { Landing } from "./components/landing"
import { MissionVission } from "./components/missionVision"
import { QuickLinks } from "./components/quicklinks"
import { Team } from "./components/team"

export const Story = () => {
  return (
    <div>
      <Landing />
      <MissionVission />
      <Team />
      <QuickLinks />
    </div>
  )
}