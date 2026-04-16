import PageLayout from "../components/layout/PageLayout"
import Hero from "../components/home/Hero"
import Explore from "../components/home/Explore"
import FeaturedEvents from "../components/home/FeaturedEvents"
import Map from "../components/home/Map"

function Home() {
  return (
    <PageLayout>
      <Hero />
      <Explore />
      <FeaturedEvents />
      <Map />
    </PageLayout>
  )
}

export default Home
