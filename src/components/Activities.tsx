import { pad } from '../lib/data'
import { activities } from '../lib/activities'
import RoleIndex from './ui/RoleIndex'

export default function Activities() {
  return (
    <RoleIndex
      id="activities"
      label="Activities & Leadership"
      title="Where I have been involved."
      lede="College leadership, community work, virtual internships and extracurricular activities alongside my technical work."
      items={activities}
      prefix="activity"
      listLabel="Activities"
      marker="index"
      noun="activities"
      action={(active, total) => (
        <span className="eyebrow">
          {pad(active)} / {String(total).padStart(2, '0')}
        </span>
      )}
    />
  )
}