import PageLayout from "../components/layout/PageLayout"
import AdvisoryBoard from "../components/about/AdvisoryBoard"
import PastAdvisoryBoard from "../components/about/PastAdvisoryBoard"

function About() {
  return (
    <PageLayout>
      <section className="about-page">
        <div className="about-shell">
          <header className="about-header">
            <h1 className="about-title">About Us</h1>
          </header>

          <section className="about-panel">
            <h2 className="about-subtitle">Our Mission</h2>
            <p className="about-description">
              Gonzales Main Street will be a driving force in ensuring that our iconic downtown
              contributes to our community&apos;s well-being. Gonzales Main Street will effectively
              carry out a program to preserve and enhance our downtown through promotions, tourism,
              encouraging local spending, and inspiring lifelong preservation and revitalization of
              our historic community.
            </p>
          </section>

          <section className="board-section">
            <AdvisoryBoard />
          </section>

          <section className="board-section">
            <PastAdvisoryBoard />
          </section>
        </div>
      </section>

      <style>{`
        .about-page {
          background:
            radial-gradient(circle at top right, rgba(208, 169, 96, 0.2), transparent 30%),
            linear-gradient(180deg, #fbf5eb 0%, #fffdf9 100%);
          min-height: 100%;
          padding: 4.5rem 1.5rem 5rem;
        }

        .about-shell {
          display: grid;
          gap: 2rem;
          margin: 0 auto;
          max-width: 960px;
        }

        .about-header {
          display: grid;
          gap: 0.5rem;
        }

        .about-kicker {
          color: #9b5f2c;
          font-family: 'IBM Plex Serif', serif;
          font-size: 0.95rem;
          font-weight: 700;
          letter-spacing: 0.14em;
          margin: 0;
          text-transform: uppercase;
        }

        .about-title {
          color: #2e2118;
          font-family: 'IBM Plex Serif', serif;
          font-size: clamp(2.5rem, 5vw, 4rem);
          line-height: 1.05;
          margin: 0;
        }

        .about-panel {
          display: grid;
          gap: 1.25rem;
          padding: 0;
        }

        .about-subtitle {
          color: #8E300B;
          font-family: 'IBM Plex Serif', serif;
          font-size: 1.9rem;
          line-height: 1.2;
          margin: 0 0 1rem;
        }

        .about-description {
          color: #45362a;
          font-family: 'IBM Plex Serif', serif;
          line-height: 1.85;
          margin: 0;
        }
        
        .board-title {
          color: #8E300B;
          font-family: 'IBM Plex Serif', serif;
          font-size: 1.85rem;
          line-height: 1.2;
          margin: 0;
        }

        .board-description {
          color: #45362a;
          font-family: 'IBM Plex Serif', serif;
          font-size: 1.02rem;
          line-height: 1.8;
          margin: 0;
        }
        .board-section {
        margin-top: 2rem;}

        @media (max-width: 768px) {
          .about-page {
            padding: 3rem 1rem 3.5rem;
          }

          .about-panel {
            gap: 1rem;
          }

          .about-subtitle {
            font-size: 1.55rem;
          }

          .about-description {
            font-size: 0.98rem;
            line-height: 1.75;
          }
 
          .board-title {
            font-size: 1.6rem;
          }

          .board-description {
            font-size: 0.98rem;
          }
        }
      `}</style>
    </PageLayout>
  )
}

export default About
