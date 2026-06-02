import PageLayout from "../components/layout/PageLayout"
import BusinessHero from "../components/businesses/BusinessHero"
import BusinessList from "../components/businesses/BusinessList"

function Businesses() {
  return (
    <PageLayout>
      <BusinessHero />
      <BusinessList />
    </PageLayout>
  )
}

export default Businesses
