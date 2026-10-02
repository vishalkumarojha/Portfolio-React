import { experiences, pad } from '../lib/data'
import RoleIndex from './ui/RoleIndex'

export default function Experience() {
  return (
    <RoleIndex
      id="experience"
      label="Experience"
      title="Where I have put it to work."
      lede="Internships, community roles and products I have helped ship alongside full-time study."
      items={experiences}
      prefix="role"
      listLabel="Roles"
      marker="year"
      noun="roles"
      action={(active, total) => (
        <span className="eyebrow">
          {pad(active)} / {String(total).padStart(2, '0')}
        </span>
      )}
    />
  )
}