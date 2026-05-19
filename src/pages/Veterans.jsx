import PageLayout from "../components/layout/PageLayout"
import veteranBannerProject from "../assets/images/Veteran_Banner_Project.png"

function Veterans() {
  return (
    <PageLayout>
      <section className="veterans-page">
        <div className="veterans-shell">
          <header className="veterans-header">
            <h1 className="veterans-title">Honor Our Veterans Banners</h1>
          </header>

          <section className="veterans-panel">
            <p className="veterans-description">
              Main Street is selling custom banners displaying Veterans to decorate light poles in
              the downtown, as an "Honor Our Veterans" project. Sales will be on a first-come,
              first-serve basis, as space is limited. A portion of the proceeds will be donated to
              Veterans Groups and/or non-profit organizations in Gonzales County, with hopes of
              donating funds to a new group each year.
            </p>
            <p className="veterans-description">
              The purchase price, for the initial year, will be $200 (includes the cost of a 24" by
              36" custom banner and display) for one (1) year during the full months of May and
              November (May for Memorializing our Veterans and November in honoring our Veterans for
              Veterans Day). Upgraded sizes are also available.
            </p>
            <p className="veterans-description">
              If you wish to participate in the following years, the cost is $150 per each additional
              year, per banner for the basic size. We would hope that you would elect to keep on
              honoring your veteran by keeping the banner up for many years to come. You're welcome
              to take your banner(s) as a keepsake afterward.
            </p>
            <p className="veterans-description">
              <a
                className="veterans-application-link"
                href="https://cdn.saffire.com/files.ashx?t=fg&rid=CityOfGonzales&f=2023_Veterans_Banner_Application.pdf&cb=72482CB8"
                target="_blank"
                rel="noreferrer"
              >
                Click here to download the application
              </a>
            </p>

            <div className="veterans-image-wrap">
              <img
                className="veterans-image"
                src={veteranBannerProject}
                alt="Veteran Banner Project"
              />
            </div>
          </section>
        </div>
      </section>

      <style>{`
        .veterans-page {
          background:
            radial-gradient(circle at top right, rgba(208, 169, 96, 0.2), transparent 30%),
            linear-gradient(180deg, #fbf5eb 0%, #fffdf9 100%);
          min-height: 100%;
          padding: 4.5rem 1.5rem 5rem;
        }

        .veterans-shell {
          display: grid;
          gap: 2rem;
          margin: 0 auto;
          max-width: 960px;
        }

        .veterans-header {
          display: grid;
          gap: 0.5rem;
        }

        .veterans-title {
          color: #2e2118;
          font-family: 'IBM Plex Serif', serif;
          font-size: clamp(2.5rem, 5vw, 4rem);
          line-height: 1.05;
          margin: 0;
        }

        .veterans-panel {
          display: grid;
          gap: 1.25rem;
          padding: 0;
        }

        .veterans-description {
          color: #45362a;
          font-family: 'IBM Plex Serif', serif;
          font-size: 1.04rem;
          line-height: 1.85;
          margin: 0;
        }

        .veterans-application-link {
          color: #8E300B;
          font-weight: 700;
          text-decoration-color: rgba(190, 64, 14, 0.45);
          text-decoration-thickness: 0.08em;
          text-underline-offset: 0.18em;
        }

        .veterans-application-link:hover,
        .veterans-application-link:focus-visible {
          color: #BE400E;
          text-decoration-color: currentColor;
        }

        .veterans-image-wrap {
          border-radius: 8px;
          box-shadow: 0 18px 42px rgba(30, 20, 10, 0.18);
          margin-top: 0.5rem;
          overflow: hidden;
          width: 100%;
        }

        .veterans-image {
          display: block;
          height: auto;
          width: 100%;
        }

        @media (max-width: 768px) {
          .veterans-page {
            padding: 3rem 1rem 3.5rem;
          }

          .veterans-panel {
            gap: 1rem;
          }

          .veterans-description {
            font-size: 0.98rem;
            line-height: 1.75;
          }
        }
      `}</style>
    </PageLayout>
  )
}

export default Veterans
