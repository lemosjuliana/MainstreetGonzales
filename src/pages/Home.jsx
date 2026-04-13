import PageLayout from "../components/layout/PageLayout"
import Hero from "../components/home/Hero"

function Home() {
  return (
    <PageLayout>
      <Hero />
      <div style={{ padding: '2rem 0' }}>
        {/* Additional home content goes here */}
      </div>
    </PageLayout>
  )
}

export default Home
