import { activityOrganizations } from '../lib/activities'
import OrganizationIndex from './ui/OrganizationIndex'

export default function Activities() {
  return (
    <OrganizationIndex
      id="activities"
      label="Activities & Leadership"
      title="Where I have been involved."
      lede="The organisations and events I have been part of, and the roles I held inside each one."
      organizations={activityOrganizations}
    />
  )
}
