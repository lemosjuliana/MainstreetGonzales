import businesses from '../../data/businesses'

function BusinessHero() {
  const businessOfTheMonth = businesses.find(
    (business) => business.id === 'b14'
  )

  if (!businessOfTheMonth) return null

  return (
    <section className="business-hero">
      <div className="business-hero-background">
        <img
          src={businessOfTheMonth.image}
          alt={businessOfTheMonth.name}
          className="business-hero-image"
        />
      </div>

      <div className="business-hero-overlay" />

      <div className="business-hero-content">
        <p className="business-of-the-month-label">
          Business of the Month
        </p>

        <h1 className="business-hero-title">
          {businessOfTheMonth.name}
        </h1>

        <p className="business-hero-category">
          {businessOfTheMonth.category}
        </p>

        <p className="business-hero-description">
          {businessOfTheMonth.description}
        </p>

        <div className="business-hero-details">
          <p>{businessOfTheMonth.address}</p>
          <p>{businessOfTheMonth.phone}</p>
        </div>

        {businessOfTheMonth.website?.trim() && (
          <a
            href={businessOfTheMonth.website}
            target="_blank"
            rel="noreferrer"
            className="business-hero-button"
          >
            Visit Website
          </a>
        )}
      </div>

      <style>{`
        .business-hero {
          position: relative;
          width: 100vw;
          min-height: 60vh;
          display: flex;
          align-items: center;
          overflow: hidden;
          margin: 0 calc(-50vw + 50%);
        }

        .business-hero-background {
          position: absolute;
          inset: 0;
          z-index: 1;
        }

        .business-hero-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .business-hero-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.80);
          z-index: 2;
        }

        .business-hero-content {
          position: relative;
          z-index: 3;
          max-width: 760px;
          padding: 5rem 2rem;
          color: #fff;
          margin-left: 5rem;
        }

        .business-of-the-month-label {
          display: inline-flex;
          align-items: center;
          margin: 0 0 1rem 0;
          padding: 0.45rem 0.9rem;
          border-radius: 999px;
          background:  #8E300B;;
          color: white;
          font-family: 'IBM Plex Serif', serif;
          font-size: 0.9rem;
          font-weight: 700;
          letter-spacing: 0.03em;
        }

        .business-hero-title {
          font-family: 'IBM Plex Serif', serif;
          margin: 0 0 0.75rem 0;
          font-size: clamp(2.5rem, 5vw, 4rem);
          line-height: 1.05;
          color: white;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }

        .business-hero-category {
          margin: 0 0 1rem 0;
          color: #f7c7b3;
          font-family: 'IBM Plex Serif', serif;
          font-size: 1rem;
          font-weight: 700;
          letter-spacing: 0.02em;
          text-transform: uppercase;
        }

        .business-hero-description {
          font-family: 'IBM Plex Serif', serif;
          font-size: 1.05rem;
          line-height: 1.7;
          margin: 0 0 1.5rem 0;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }

        .business-hero-details {
          margin-bottom: 1.5rem;
        }

        .business-hero-details p {
          margin: 0 0 0.45rem 0;
          font-family: 'IBM Plex Serif', serif;
          font-size: 0.98rem;
          line-height: 1.5;
          text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
        }

        .business-hero-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0.9rem 1.3rem;
          border-radius: 8px;
          background-color: #8E300B;
          color: white;
          text-decoration: none;
          cursor: pointer;
          font-family: 'IBM Plex Serif', serif;
          font-weight: 600;
         transition: all 0.3s ease;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.3);
        }

        .business-hero-button:hover {
          background-color: #BE400E;
          color: white;
          box-shadow: 0 6px 12px rgba(0, 0, 0, 0.4);
        }

        .business-hero-button:active {
          transform: scale(0.95);
        }

        @media (max-width: 1024px) {
          .business-hero {
            min-height: 50vh;
          }

          .business-hero-title {
            font-size: 2.5rem;
          }
        }

        @media (max-width: 768px) {
          .business-hero {
            min-height: 48vh;
          }

          .business-hero-content {
            padding: 2rem 1rem;
            margin-left: 1rem;
          }

          .business-hero-title {
            font-size: 2rem;
          }

          .business-hero-description {
            font-size: 0.95rem;
          }

          .business-hero-details p {
            font-size: 0.92rem;
          }
        }
      `}</style>
    </section>
  )
}

export default BusinessHero