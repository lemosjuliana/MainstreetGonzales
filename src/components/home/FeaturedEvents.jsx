import { useMemo } from 'react'
import events from '../../data/events'

function FeaturedEvents() {
  // Get the most upcoming event
  const upcomingEvent = useMemo(() => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    // Filter events that are today or in the future
    const futureEvents = events.filter((event) => {
      const eventDate = new Date(event.date)
      return eventDate >= today
    })

    // Sort by date (earliest first) and return the first event
    if (futureEvents.length === 0) {
      return null // No upcoming events
    }

    futureEvents.sort((a, b) => new Date(a.date) - new Date(b.date))
    return futureEvents[0]
  }, [])

  if (!upcomingEvent) {
    return (
      <section className="featured-events-wrapper">
        <h1 className="featured-events-title">Join Us for our Upcoming Event</h1>
        <div className="featured-events-section">
          <p className="no-events">No upcoming events at this time.</p>
        </div>

        <style>{`
          .featured-events-wrapper {
            padding: 4rem 2rem;
            background-color: #fff;
            margin: 0;
          }

          .featured-events-title {
            font-family: 'IBM Plex Serif', serif;
            font-size: 2.5rem;
            font-weight: 700;
            color: #333;
            text-align: left;
            margin-bottom: 3rem;
          }

          .featured-events-section {
            padding: 0;
            background-color: #fff;
            margin: 0;
          }

          .no-events {
            text-align: center;
            color: #666;
            font-size: 1rem;
          }
        `}</style>
      </section>
    )
  }

  return (
    <section className="featured-events-wrapper">
      <h1 className="featured-events-title">Join Us for our Upcoming Event</h1>
      <div className="featured-event-container">
        {/* Left Side - Event Info */}
        <div className="event-info">
          <h2 className="event-title">{upcomingEvent.title}</h2>
          <p className="event-description">{upcomingEvent.description}</p>
          <div className="event-details">
            <p><strong>Date:</strong> {new Date(upcomingEvent.date).toLocaleDateString()}</p>
            <p><strong>Location:</strong> {upcomingEvent.location}</p>
          </div>
        </div>

        {/* Right Side - Event Image */}
        <div className="event-image-container">
          <img src={upcomingEvent.image} alt={upcomingEvent.title} className="event-image" />
        </div>
      </div>

      <style>{`
        .featured-events-wrapper {
          padding: 4rem 2rem;
          background-color: #F8B9A0;
          margin: 0;
        }

        .featured-events-title {
          font-family: 'IBM Plex Serif', serif;
          font-size: 2.5rem;
          font-weight: 700;
          color: #333;
          text-align: left;
          margin-bottom: 3rem;
        }

        .featured-event-container {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 4rem;
          max-width: 1200px;
          margin: 0 auto;
          align-items: center;
        }

        .event-info {
          padding: 2rem;
        }

        .event-title {
          font-family: 'IBM Plex Serif', serif;
          font-size: 1.5rem;
          font-weight: 700;
          color: #333;
          margin: 0 0 1rem 0;
        }

        .event-description {
          font-family: 'IBM Plex Serif', serif;
          font-size: 1rem;
          line-height: 1.6;
          color: #212020;
          margin-bottom: 2rem;
        }

        .event-details {
          display: flex;
          flex-direction: column;
          gap: 0.75rem;
          font-family: 'IBM Plex Serif', serif;
          font-size: 0.95rem;
          color: #212020;
        }

        .event-details p {
          margin: 0;
        }

        .event-image-container {
          width: 100%;
          height: 350px;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
        }

        .event-image {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        /* Responsive Design */
        @media (max-width: 1024px) {
          .featured-event-container {
            gap: 2rem;
          }

          .event-title {
            font-size: 1.25rem;
          }

          .event-description {
            font-size: 0.95rem;
          }

          .event-image-container {
            height: 300px;
          }
        }

        @media (max-width: 768px) {
          .featured-events-wrapper {
            padding: 3rem 1rem;
          }

          .featured-events-title {
            font-size: 1.5rem;
            margin-bottom: 2rem;
          }

          .featured-event-container {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .event-info {
            padding: 1.5rem;
          }

          .event-title {
            font-size: 1.15rem;
          }

          .event-description {
            font-size: 0.9rem;
          }

          .event-image-container {
            height: 250px;
          }
        }

        @media (max-width: 480px) {
          .featured-events-wrapper {
            padding: 2rem 1rem;
          }

          .featured-events-title {
            font-size: 1.25rem;
            margin-bottom: 1.5rem;
          }

          .event-info {
            padding: 1rem;
          }

          .event-title {
            font-size: 1rem;
          }

          .event-description {
            font-size: 0.85rem;
            margin-bottom: 1rem;
          }

          .event-details {
            font-size: 0.85rem;
            gap: 0.5rem;
          }

          .event-image-container {
            height: 200px;
          }
        }
      `}</style>
    </section>
  )
}

export default FeaturedEvents
