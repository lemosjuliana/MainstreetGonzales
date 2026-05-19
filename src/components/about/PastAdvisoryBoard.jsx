import formerBoard from "../../data/formerBoard"

function PastAdvisoryBoard() {
  return (
    <section className="past-advisory-board">
      <div className="past-advisory-board-header">
        <h2 className="past-advisory-board-title">Past Advisory Board</h2>
      </div>

      <div className="past-advisory-board-grid">
        {formerBoard.map((member) => (
          <article key={member.id} className="past-advisory-board-card">
            <div className="past-advisory-board-image-wrap">
              <img
                className="past-advisory-board-image"
                src={member.image}
                alt={member.name}
                loading="lazy"
              />
            </div>
            <h3 className="past-advisory-board-name">{member.name}</h3>
            <p className="past-advisory-board-role">{member.title}</p>
            <p className="past-advisory-board-service">{member.time_service}</p>
          </article>
        ))}
      </div>

      <style>{`
        .past-advisory-board {
          display: grid;
          gap: 2rem;
        }

        .past-advisory-board-header {
          display: grid;
          gap: 0.75rem;
        }

        .past-advisory-board-title {
          color: #8E300B;
          font-family: 'IBM Plex Serif', serif;
          font-size: clamp(1.9rem, 3vw, 2.45rem);
          line-height: 1.15;
          margin: 0;
        }

        .past-advisory-board-grid {
          display: grid;
          gap: 1rem 0.85rem;
          grid-template-columns: repeat(3, minmax(0, 1fr));
        }

        .past-advisory-board-card {
          align-items: center;
          display: grid;
          gap: 0.3rem;
          justify-items: center;
          text-align: center;
        }

        .past-advisory-board-image-wrap {
          aspect-ratio: 1;
          border-radius: 50%;
          box-shadow: 0 8px 24px rgba(30, 20, 10, 0.16);
          overflow: hidden;
          width: min(100%, 96px);
        }

        .past-advisory-board-image {
          display: block;
          height: 100%;
          object-fit: cover;
          width: 100%;
        }

        .past-advisory-board-name {
          color: #5F2007;
          font-family: 'IBM Plex Serif', serif;
          font-size: 0.8rem;
          line-height: 1.3;
          margin: 0;
        }

        .past-advisory-board-role,
        .past-advisory-board-service {
          color: #210B02;
          font-family: 'IBM Plex Serif', serif;
          line-height: 1.5;
          margin: 0;
        }

        .past-advisory-board-role {
          font-size: 0.69rem;
        }

        .past-advisory-board-service {
          color: #BE400E;
          font-size: 0.66rem;
          font-weight: 700;
          letter-spacing: 0.02em;
        }

        @media (max-width: 900px) {
          .past-advisory-board-grid {
            grid-template-columns: repeat(2, minmax(0, 1fr));
          }
        }

        @media (max-width: 640px) {
          .past-advisory-board {
            gap: 1.5rem;
          }

          .past-advisory-board-grid {
            gap: 1rem 0.75rem;
            grid-template-columns: 1fr;
          }

          .past-advisory-board-image-wrap {
            width: min(100%, 88px);
          }

          .past-advisory-board-role {
            min-height: auto;
          }
        }
      `}</style>
    </section>
  )
}

export default PastAdvisoryBoard
