import { Link, useParams } from 'react-router-dom'
import events from '../../data/events'
import returnIcon from '../../assets/icons/return_icon.png'

function EventDetails() {
  const { eventId } = useParams()
  const event = events.find((item) => item.id === eventId)

  if (!event) {
    return (
      <section className="event-details-page">
        <Link to="/events" className="event-return-link" aria-label="Back to Events">
          <img src={returnIcon} alt="" className="event-return-icon" />
        </Link>
        <p className="event-details-empty">Event not found.</p>
      </section>
    )
  }

  return (
    <section className="event-details-page">
      <Link to="/events" className="event-return-link" aria-label="Back to Events">
        <img src={returnIcon} alt="" className="event-return-icon" />
      </Link>
      <div className="event-details-card">
        <img src={event.image} alt={event.title} className="event-details-image" />
        <div className="event-details-content">
          <p className="event-details-category">{event.category}</p>
          <h1 className="event-details-title">{event.title}</h1>
          <p className="event-details-meta">
            {new Date(event.date).toLocaleDateString()} | {event.location}
          </p>
          <p className="event-details-description">{event.description}</p>
        </div>
      </div>

      <style>{`
        .event-details-page {
          padding: 4rem 2rem;
          background: #ffff;
          min-height: 50vh;
        }

        .event-details-card {
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

        .event-details-image {
          width: 100%;
          height: 100%;
          min-height: 320px;
          object-fit: cover;
        }

        .event-details-content {
          padding: 2rem;
        }

        .event-details-category {
          margin: 0 0 0.5rem 0;
          color: #8e300b;
          font-weight: 700;
          font-family: 'IBM Plex Serif', serif;
        }

        .event-details-title {
          margin: 0 0 0.75rem 0;
          font-family: 'IBM Plex Serif', serif;
          font-size: 2rem;
          color: #1f1f1f;
        }

        .event-details-meta {
          margin: 0 0 1.25rem 0;
          font-family: 'IBM Plex Serif', serif;
          color: #5a5a5a;
        }

        .event-details-description {
          margin: 0 0 1.5rem 0;
          line-height: 1.7;
          color: #2f2f2f;
          font-family: 'IBM Plex Serif', serif;
        }

        .event-return-link {
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

        .event-return-link:hover {
          background: #e57f58;
        }
        
        .event-return-link:active {
          box-shadow: none;
          transition: 0.3s;
          transform: scale(0.93);
        }

        .event-return-icon {
          width: 22px;
          height: 22px;
        }

        .event-details-empty {
          margin: 0 0 1rem 0;
          font-family: 'IBM Plex Serif', serif;
          color: #1f1f1f;
          font-size: 1.15rem;
        }

        @media (max-width: 900px) {
          .event-details-card {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 600px) {
          .event-details-page {
            padding: 3rem 1rem;
          }

          .event-details-content {
            padding: 1.25rem;
          }

          .event-details-title {
            font-size: 1.55rem;
          }
        }
      `}</style>
    </section>
  )
}

export default EventDetails
