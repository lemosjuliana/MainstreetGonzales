import PageLayout from "../components/layout/PageLayout"
import EventHero from "../components/events/EventHero"
import EventList from "../components/events/EventList"

function Events() {
  return (
    <PageLayout>
      <EventHero />
      <EventList />
    </PageLayout>
  )
}

export default Events
