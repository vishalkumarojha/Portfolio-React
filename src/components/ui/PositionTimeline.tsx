import type { ActivityOrganization } from '../../lib/activities'
import PositionItem from './PositionItem'

/* The positions held at one organisation, newest first, hung off a single
   vertical rule so the progression reads as a timeline rather than a list.

   pl-8 combined with the -left-9 dot offset in PositionItem is what centres
   each dot on the rule: the 1px border plus 2rem of padding puts the item's
   content edge 33px past the rule, and -2.25rem pulls an 8px dot back so its
   centre lands on the rule. Changing one without the other misaligns them. */
export default function PositionTimeline({
  organization,
}: {
  organization: ActivityOrganization
}) {
  return (
    <ol className="mt-8 space-y-8 border-l border-hairline pl-8 sm:mt-10 sm:space-y-10">
      {organization.positions.map((position) => (
        <PositionItem key={position.title} position={position} />
      ))}
    </ol>
  )
}
