import currentBoard from "../../data/currentBoard"

function AdvisoryBoard() {
  return (
    <section className="advisory-board">
      <div className="advisory-board-header">
        <h2 className="advisory-board-title">Meet the Advisory Board</h2>
      </div>

      <div className="advisory-board-grid">
        {currentBoard.map((member) => (
          <article key={member.id} className="advisory-board-card">
            <div className="advisory-board-image-wrap">
              <img
                className="advisory-board-image"
                src={member.image}
                alt={member.name}
                loading="lazy"
              />
            </div>
            <h3 className="advisory-board-name">{member.name}</h3>
            <p className="advisory-board-role">{member.title}</p>
            <p className="advisory-board-service">{member.time_service}</p>
          </article>
        ))}
      </div>

      <section className="advisory-board-volunteer" aria-labelledby="volunteer-title">
        <h2 id="volunteer-title" className="advisory-board-volunteer-title">
          Want to be a volunteer?
        </h2>
        <p className="advisory-board-description">
          On October 10, 2019, the City Council adopted Ordinance 2019-20 establishing
          a{" "}
          <a
            className="advisory-board-link"
            href="https://cdn.saffire.com/files.ashx?t=fg&rid=CityOfGonzales&f=Code_of_Ethics_Packet.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Code of Ethics and Conduct for City Officials and Employees
          </a>
          . Every individual employed by the City of Gonzales or appointed to a board, committee or
          commission governed by the City of Gonzales, must read and understand the City of Gonzales
          Code of Ethics.
        </p>
        <p className="advisory-board-description">
          If you are interested in serving, please complete a{" "}
          <a
            className="advisory-board-link"
            href="https://cdn.saffire.com/files.ashx?t=fg&rid=CityOfGonzales&f=2024_Board_Application_FINAL_10.17.2024.pdf"
            target="_blank"
            rel="noreferrer"
          >
            Board Application
          </a>{" "}
          (fillable form) and return it to City Secretary{" "}
          <a className="advisory-board-link" href="mailto:citysecretary@gonzales.texas.gov">
            Kristina Vega
          </a>{" "}
          for City Council consideration.
        </p>
        <h3 className="advisory-board-volunteer-subtitle">Job Requirements</h3>
        <ul className="advisory-board-volunteer-list">
          <li>Leadership abilities and a commitment to the growth and redevelopment of Gonzales.</li>
          <li>
            Enthusiastic, willing to try new ideas and bring a high level of creativity to the
            redevelopment process.
          </li>
          <li>4-10 hours per month of available time outside of board meetings.</li>
          <li>
            Supports board decisions, Main Street Director, and City of Gonzales, even when he or she
            may disagree with the majority decision.
          </li>
          <li>Understands the mission and vision of the Main Street Program.</li>
          <li>
            Promotes goals and activities to his or her own constituent groups and to the community as
            a whole.
          </li>
          <li>Attends the majority of board meetings, not missing 3 or more consecutive meetings.</li>
          <li>Attends as many special events and fundraisers as possible.</li>
          <li>
            Attends the mandatory Board Training and workshops held each year by the Texas Historical
            Commission.
          </li>
          <li>Contributes knowledge, financial resources, or labor to Gonzales Main Street.</li>
          <li>Offers opinions honestly, without reservation, and in a constructive way.</li>
          <li>
            Does not commit more time to the Main Street program than he or she can realistically
            afford, and delegates responsibilities to committees when appropriate.
          </li>
          <li>
            Promotes unity within the organization and seeks to resolve conflicts; takes
            responsibility for his or her position on the board and takes appropriate action if life
            situations alter his or her time commitment.
          </li>
        </ul>
      </section>

      <style>{`
        .advisory-board {
          display: grid;
          gap: 2rem;
        }

        .advisory-board-header {
          display: grid;
          gap: 0.75rem;
        }

        .advisory-board-title {
          color: #8E300B;
          font-family: 'IBM Plex Serif', serif;
          font-size: clamp(1.9rem, 3vw, 2.45rem);
          line-height: 1.15;
          padding-left: 0;
          margin: 0;
        }

        .advisory-board-grid {
          display: grid;
          gap: 2rem 1.5rem;
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .advisory-board-card {
          align-items: center;
          display: grid;
          gap: 0.55rem;
          justify-items: center;
          text-align: center;
        }

        .advisory-board-image-wrap {
          aspect-ratio: 1;
          border-radius: 50%;
          box-shadow: 0 8px 24px rgba(30, 20, 10, 0.16);
          overflow: hidden;
          width: min(100%, 190px);
        }

        .advisory-board-image {
          display: block;
          height: 100%;
          object-fit: cover;
          width: 100%;
        }

        .advisory-board-name {
          color: #5F2007;
          font-family: 'IBM Plex Serif', serif;
          font-size: 1.15rem;
          line-height: 1.3;
          margin: 0;
        }

        .advisory-board-role,
        .advisory-board-service {
          color: #210B02;
          font-family: 'IBM Plex Serif', serif;
          line-height: 1.6;
          margin: 0;
        }

        .advisory-board-role {
          font-size: 0.98rem;
          margin-bottom: 0;
        }

        .advisory-board-service {
          color: #BE400E;
          font-size: 0.94rem;
          font-weight: 700;
          letter-spacing: 0.02em;
        }

        .advisory-board-link {
          color: #8E300B;
          font-weight: 700;
          text-decoration-color: rgba(190, 64, 14, 0.45);
          text-decoration-thickness: 0.08em;
          text-underline-offset: 0.18em;
        }

        .advisory-board-link:hover,
        .advisory-board-link:focus-visible {
          color: #BE400E;
          text-decoration-color: currentColor;
        }

        .advisory-board-volunteer {
          display: grid;
          gap: 0.75rem;
          padding-top: 1.75rem;
        }

        .advisory-board-volunteer-title {
          color: #8E300B;
          font-family: 'IBM Plex Serif', serif;
          font-size: clamp(1.45rem, 2.4vw, 1.9rem);
          line-height: 1.2;
          margin: 0;
        }

        .advisory-board-volunteer-subtitle {
          color: #5F2007;
          font-family: 'IBM Plex Serif', serif;
          font-size: 1rem;
          letter-spacing: 0.08em;
          line-height: 1.4;
          margin: 0;
          text-transform: uppercase;
        }

        .advisory-board-volunteer-list {
          color: #210B02;
          display: grid;
          font-family: 'IBM Plex Serif', serif;
          font-size: 1rem;
          gap: 0.55rem;
          line-height: 1.65;
          margin: 0;
          padding-left: 1.35rem;
        }

        .advisory-board-volunteer-list li::marker {
          color: #BE400E;
        }

        @media (max-width: 900px) {
          .advisory-board-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 640px) {
          .advisory-board {
            gap: 1.5rem;
          }

          .advisory-board-grid {
            gap: 1.5rem 1rem;
            grid-template-columns: 1fr;
          }

          .advisory-board-image-wrap {
            width: min(100%, 180px);
          }

          .advisory-board-role {
            min-height: auto;
          }

          .advisory-board-volunteer {
            padding-top: 1.25rem;
          }

          .advisory-board-volunteer-list {
            font-size: 0.96rem;
            padding-left: 1.2rem;
          }
        }
      `}</style>
    </section>
  )
}

export default AdvisoryBoard
