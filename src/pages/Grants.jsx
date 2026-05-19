import PageLayout from "../components/layout/PageLayout"

function Grants() {
  return (
    <PageLayout>
      <section className="grants-page">
        <div className="grants-shell">
          <header className="grants-header">
            <h1 className="grants-title">Main Street Revitalization Incentive Program</h1>
          </header>

          <section className="grants-panel">
            <p className="grants-description">
              The mission of the Gonzales Main Street Revitalization Incentive Program is to improve
              the image, inspire lifelong preservation and revitalization of our historic community,
              and enhance the economic sustainability of the Gonzales Main Street District. The
              Gonzales Main Street Revitalization Incentive Program is governed by economic
              development law and the Secretary of the Interior's Standards for the Treatment of
              Historic Properties. Gonzales Main Street can support projects that meet these
              standards and are located within the Main Street boundaries. Gonzales Main Street funds
              will be provided on qualifying projects that stimulate Historic Preservation, Business
              Retention and Expansion, and the Revitalization of our Historic Community.
            </p>
            <p className="grants-description">
              <a
                className="grants-link"
                href="https://cdn.saffire.com/files.ashx?t=fg&rid=CityOfGonzales&f=GMS_Incentive_guidelines_2024.pdf"
                target="_blank"
                rel="noreferrer"
              >
                Click here to read the guidelines
              </a>
            </p>

            <section className="grants-instructions" aria-labelledby="grants-instructions-title">
              <h2 id="grants-instructions-title" className="grants-subtitle">
                Grants instructions
              </h2>
              <div className="grants-instructions-copy">
                <p>To receive an application, submit a letter of intent to apply to:</p>
                <p>
                  <strong>
                    Gonzales Main Street
                    <br />
                    Attn: Executive Director
                    <br />
                    P.O. Box 547
                    <br />
                    Gonzales, TX 78629
                  </strong>
                </p>
                <p>
                  Or, email to:
                  <br />
                  <strong>
                    <a className="grants-link" href="mailto:MainStreet@gonzales.texas.gov">
                      MainStreet@gonzales.texas.gov
                    </a>
                  </strong>
                </p>
                <p>
                  Or, hand deliver to physical address:
                  <br />
                  <strong>
                    Gonzales Main Street
                    <br />
                    305 St. Lawrence Street
                    <br />
                    Gonzales, TX
                  </strong>
                </p>
                <p>
                  Please contact the Gonzales Main Street office with any questions:
                  <br />
                  Email:
                  <br />
                  <a className="grants-link" href="mailto:MainStreet@gonzales.texas.gov">
                    MainStreet@gonzales.texas.gov
                  </a>
                </p>
                <p>
                  Phone :
                  <br />
                  830-203-1705 - Tiffany Hutchinson-Padilla, Executive Director
                </p>
                <div className="grants-funding-note">
                  <p>
                    To be considered for potential funding, a COMPLETE application must be submitted
                    to Gonzales Main Street.
                  </p>
                  <p>
                    Completed applications received by the First DAY of the month will be considered
                    at that month's board meeting; applications received AFTER the first day of the
                    month will be considered at the board meeting of the following month.
                  </p>
                </div>
              </div>
            </section>
          </section>
        </div>
      </section>

      <style>{`
        .grants-page {
          background:
            radial-gradient(circle at top right, rgba(208, 169, 96, 0.2), transparent 30%),
            linear-gradient(180deg, #fbf5eb 0%, #fffdf9 100%);
          min-height: 100%;
          padding: 4.5rem 1.5rem 5rem;
        }

        .grants-shell {
          display: grid;
          gap: 2rem;
          margin: 0 auto;
          max-width: 960px;
        }

        .grants-header {
          display: grid;
          gap: 0.5rem;
        }

        .grants-title {
          color: #2e2118;
          font-family: 'IBM Plex Serif', serif;
          font-size: clamp(2.5rem, 5vw, 4rem);
          line-height: 1.05;
          margin: 0;
        }

        .grants-panel {
          display: grid;
          gap: 1.25rem;
          padding: 0;
        }

        .grants-description,
        .grants-instructions-copy {
          color: #45362a;
          font-family: 'IBM Plex Serif', serif;
          font-size: 1.04rem;
          line-height: 1.85;
          margin: 0;
        }

        .grants-link {
          color: #8E300B;
          font-weight: 700;
          text-decoration-color: rgba(190, 64, 14, 0.45);
          text-decoration-thickness: 0.08em;
          text-underline-offset: 0.18em;
        }

        .grants-link:hover,
        .grants-link:focus-visible {
          color: #BE400E;
          text-decoration-color: currentColor;
        }

        .grants-instructions {
          display: grid;
          gap: 1.25rem;
          margin-top: 1rem;
        }

        .grants-subtitle {
          color: #8E300B;
          font-family: 'IBM Plex Serif', serif;
          font-size: 1.9rem;
          line-height: 1.2;
          margin: 0;
        }

        .grants-instructions-copy {
          display: grid;
          gap: 1.2rem;
        }

        .grants-instructions-copy p {
          margin: 0;
        }

        .grants-instructions-copy strong {
          color: #2e2118;
          font-weight: 700;
        }

        .grants-funding-note {
          color: #8E300B;
          display: grid;
          font-weight: 700;
          gap: 1rem;
          margin-top: 0.25rem;
        }

        .grants-funding-note p {
          margin: 0;
        }

        @media (max-width: 768px) {
          .grants-page {
            padding: 3rem 1rem 3.5rem;
          }

          .grants-panel {
            gap: 1rem;
          }

          .grants-description,
          .grants-instructions-copy {
            font-size: 0.98rem;
            line-height: 1.75;
          }

          .grants-subtitle {
            font-size: 1.55rem;
          }
        }
      `}</style>
    </PageLayout>
  )
}

export default Grants
