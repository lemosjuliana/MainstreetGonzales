import PageLayout from "../components/layout/PageLayout"
import Hero from "../components/home/Hero"
import Explore from "../components/home/Explore"

function Home() {
  return (
    <PageLayout>
      <Hero />
      <Explore />
      <div style={{ padding: '2rem 0' }}>
        {/* Additional home content goes here */}
      </div>
    </PageLayout>
  )
}

export default Home
