import { Link, useParams } from 'react-router-dom'
import businesses from '../../data/businesses'
import returnIcon from '../../assets/icons/return_icon.png'

function BusinessDetails() {
  const { businessId } = useParams()

  const business = businesses.find(
    (item) => item.id === businessId
  )

  if (!business) {
    return (
      <section className="business-details-page">
        <Link
          to="/businesses"
          className="business-return-link"
          aria-label="Back to Businesses"
        >
          <img
            src={returnIcon}
            alt=""
            className="business-return-icon"
          />
        </Link>

        <p className="business-details-empty">
          Business not found.
        </p>
      </section>
    )
  }

  return (
    <section className="business-details-page">
      <Link
        to="/businesses"
        className="business-return-link"
        aria-label="Back to Businesses"
      >
        <img
          src={returnIcon}
          alt=""
          className="business-return-icon"
        />
      </Link>

      <div className="business-details-card">
        <img
          src={business.image}
          alt={business.name}
          className="business-details-image"
        />

        <div className="business-details-content">
          <p className="business-details-category">
            {business.category}
          </p>

          <h1 className="business-details-title">
            {business.name}
          </h1>

          <div className="business-details-info">
            <p className="business-details-meta">
              📍 {business.address}
            </p>

            {business.phone && (
              <p className="business-details-meta">
                📞 {business.phone}
              </p>
            )}

            {business.website?.trim() && (
              <a
                href={business.website}
                target="_blank"
                rel="noreferrer"
                className="business-details-website"
              >
                Visit Website
              </a>
            )}
          </div>

          <p className="business-details-description">
            {business.description}
          </p>
        </div>
      </div>

      <style>{`
        .business-details-page {
          padding: 4rem 2rem;
          background: #ffff;
          min-height: 50vh;
        }

        .business-details-card {
          max-width: 1050px;
          margin: 0 auto;
          background:
            radial-gradient(circle at top right, rgba(208, 169, 96, 0.2), transparent 30%),
            linear-gradient(180deg, #fbf5eb 0%, #fffdf9 100%);
          border-radius: 8px;
          overflow: hidden;
          box-shadow: 0 8px 24px rgba(30, 20, 10, 0.16);
          display: grid;
          grid-template-columns: 1fr 1fr;
        }

        .business-details-image {
          width: 100%;
          height: 100%;
          min-height: 320px;
          object-fit: cover;
        }

        .business-details-content {
          padding: 2rem;
        }

        .business-details-category {
          margin: 0 0 0.5rem 0;
          color: #8e300b;
          font-weight: 700;
          font-family: 'IBM Plex Serif', serif;
        }

        .business-details-title {
          margin: 0 0 1rem 0;
          font-family: 'IBM Plex Serif', serif;
          font-size: 2rem;
          color: #1f1f1f;
        }

        .business-details-info {
          margin-bottom: 1.5rem;
        }

        .business-details-meta {
          margin: 0 0 0.5rem 0;
          font-family: 'IBM Plex Serif', serif;
          color: #5a5a5a;
          line-height: 1.5;
        }

        .business-details-description {
          margin: 0;
          line-height: 1.7;
          color: #2f2f2f;
          font-family: 'IBM Plex Serif', serif;
        }

        .business-details-website {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          margin-top: 0.5rem;
          padding: 0.7rem 1.1rem;
          border-radius: 8px;
          background: #F49671;
          color: white;
          text-decoration: none;
          font-family: 'IBM Plex Serif', serif;
          font-weight: 700;
          transition:
            background-color 0.2s ease,
            transform 0.2s ease;
        }

        .business-details-website:hover {
          background: #e57f58;
        }

        .business-details-website:active {
          transform: scale(0.95);
        }

        .business-return-link {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          margin-bottom: 1rem;
          border-radius: 8px;
          background: #F49671;
          box-shadow: 0 4px 12px rgba(30, 20, 10, 0.16);
        }

        .business-return-link:hover {
          background: #e57f58;
        }

        .business-return-link:active {
          box-shadow: none;
          transition: 0.3s;
          transform: scale(0.93);
        }

        .business-return-icon {
          width: 22px;
          height: 22px;
        }

        .business-details-empty {
          margin: 0 0 1rem 0;
          font-family: 'IBM Plex Serif', serif;
          color: #1f1f1f;
          font-size: 1.15rem;
        }

        @media (max-width: 900px) {
          .business-details-card {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 600px) {
          .business-details-page {
            padding: 3rem 1rem;
          }

          .business-details-content {
            padding: 1.25rem;
          }

          .business-details-title {
            font-size: 1.55rem;
          }
        }
      `}</style>
    </section>
  )
}

export default BusinessDetails