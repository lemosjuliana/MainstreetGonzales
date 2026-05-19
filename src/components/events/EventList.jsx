import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import events from '../../data/events'
import searchIcon from '../../assets/icons/search_icon.png'

const seasonalCategories = ['Spring', 'Summer', 'Fall', 'Winter']

function getSeasonFromDate(dateString) {
  const month = new Date(dateString).getMonth() + 1

  if (month >= 3 && month <= 5) return 'Spring'
  if (month >= 6 && month <= 8) return 'Summer'
  if (month >= 9 && month <= 11) return 'Fall'
  return 'Winter'
}

function normalizeCategory(event) {
  if (seasonalCategories.includes(event.category)) {
    return event.category
  }

  return getSeasonFromDate(event.date)
}

function EventList() {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')

  const filteredEvents = useMemo(() => {
    const query = searchQuery.trim().toLowerCase()

    if (!query) return events

    return events.filter((event) => {
      const eventName = event.title.toLowerCase()
      const eventCategory = event.category.toLowerCase()
      return eventName.includes(query) || eventCategory.includes(query)
    })
  }, [searchQuery])

  const groupedEvents = useMemo(() => {
    const groups = {
      Spring: [],
      Summer: [],
      Fall: [],
      Winter: [],
    }

    filteredEvents.forEach((event) => {
      const season = normalizeCategory(event)
      groups[season].push(event)
    })

    seasonalCategories.forEach((season) => {
      groups[season].sort((a, b) => new Date(a.date) - new Date(b.date))
    })

    return groups
  }, [filteredEvents])

  const hasResults = filteredEvents.length > 0

  return (
    <section className="event-list-section">
      <div className="event-list-shell">
        <div className="event-list-left">
          <h2 className="event-list-title">Find Your Next Downtown Event</h2>
          <p className="event-list-subtitle">
            Search by event name or category, then browse by season to discover what is coming up.
          </p>
        </div>

        <div className="event-list-right">
          <label htmlFor="event-search" className="event-search-label">Search Events</label>
          <form className="event-search-row" onSubmit={(event) => event.preventDefault()}>
            <input
              id="event-search"
              type="text"
              className="event-search-input"
              placeholder="Search by name or category"
              value={searchQuery}
              onChange={(event) => setSearchQuery(event.target.value)}
            />
            <button type="submit" className="event-search-button" aria-label="Search events">
              <img src={searchIcon} alt="" className="event-search-icon" />
            </button>
          </form>

          {!hasResults && <p className="event-empty-state">No Events Found</p>}
        </div>

        {hasResults && (
          <div className="season-groups">
            {seasonalCategories.map((season) => (
              <div key={season} className="season-group">
                <h3 className="season-title">{season}</h3>
                {groupedEvents[season].length === 0 ? (
                  <p className="season-empty">No events in this category.</p>
                ) : (
                    <ul className="season-event-list">
                      {groupedEvents[season].map((event) => (
                        <li key={event.id} className="season-event-item">
                          <button
                            type="button"
                            className="event-item-button"
                            onClick={() => navigate(`/events/${event.id}`)}
                          >
                            <p className="event-name">{event.title}</p>
                            <p className="event-meta">
                              {new Date(event.date).toLocaleDateString()} | {event.location}
                            </p>
                          </button>
                        </li>
                      ))}
                    </ul>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      <style>{`
        .event-list-section {
          padding: 4rem 2rem;
          background:
            radial-gradient(circle at top right, rgba(208, 169, 96, 0.2), transparent 30%),
            linear-gradient(180deg, #fbf5eb 0%, #fffdf9 100%);
        }

        .event-list-shell {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1.25fr;
          gap: 2rem;
          align-items: start;
        }

        .event-list-left {
          top: 1rem;
          justify-self: start;
          text-align: left;
        }

        .event-list-title {
          font-family: 'IBM Plex Serif', serif;
          font-size: 2rem;
          margin: 0 0 1rem 0;
          color: #1f1f1f;
        }

        .event-list-subtitle {
          margin: 0;
          font-family: 'IBM Plex Serif', serif;
          font-size: 1rem;
          line-height: 1.6;
          color: #404040;
        }

        .event-list-right {
          border-radius: 12px;
          padding: 1.5rem;
          padding-top: 0;
          text-align: left;
        }

        .event-search-label {
          display: block;
          font-family: 'IBM Plex Serif', serif;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: #2a2a2a;
          text-align: left;
        }

        .event-search-row {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .event-search-input {
          width: min(100%, 420px);
          padding: 0.75rem 0.9rem;
          border: none;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(30, 20, 10, 0.16);
          font-size: 1rem;
          font-family: 'IBM Plex Serif', serif;
        }

        .event-search-input:focus {
          outline: 2px solid #F49671;
          outline-offset: 1px;
        }

        .event-search-button {
          width: 45px;
          height: 45px;
          border: none;
          border-radius: 8px;
          background: #F49671;
          box-shadow: 0 4px 12px rgba(30, 20, 10, 0.16);
          display: inline-flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
          transition: background-color 0.2s ease, box-shadow 0.2s ease;
        }

        .event-search-button:hover {
          background: #e57f58;
        }

        .event-search-button:active {
          box-shadow: none;
          transition: 0.3s;
          transform: scale(0.93);
        }

        .event-search-icon {
          width: 20px;
          height: 20px;
        }

        .event-empty-state {
          margin: 0;
          font-weight: 700;
          color: #be400e;
          font-family: 'IBM Plex Serif', serif;
        }

        .season-groups {
          grid-column: 1 / -1;
          background: #fff;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(30, 20, 10, 0.16);
          padding: 1.5rem;
          display: grid;
          gap: 1rem;
        }

        .season-group {
          padding-top: 1rem;
        }

        .season-title {
          margin: 0 0 0.75rem 0;
          font-family: 'IBM Plex Serif', serif;
          font-size: 1.2rem;
          color: #8e300b;
        }

        .season-event-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 0.7rem;
        }

        .season-event-item {
          background: #fbf7f2;
          border-radius: 8px;
          padding: 0;
        }

        .event-item-button {
          width: 100%;
          border: none;
          border-radius: 8px;
          background: transparent;
          text-align: left;
          padding: 0.75rem;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }

        .event-item-button:hover {
          background: #f6ede4;
        }

        .event-name {
          margin: 0;
          font-family: 'IBM Plex Serif', serif;
          font-weight: 700;
          color: #2b2b2b;
        }

        .event-meta {
          margin: 0.25rem 0 0 0;
          font-family: 'IBM Plex Serif', serif;
          font-size: 0.9rem;
          color: #5a5a5a;
        }

        .season-empty {
          margin: 0;
          font-family: 'IBM Plex Serif', serif;
          color: #6b6b6b;
        }

        @media (max-width: 900px) {
          .event-list-shell {
            grid-template-columns: 1fr;
          }

          .event-list-left {
            position: static;
          }

          .event-search-label {
            text-align: left;
          }

          .event-search-row {
            justify-content: flex-start;
          }

          .season-groups {
            grid-column: 1;
          }
        }

        @media (max-width: 600px) {
          .event-list-section {
            padding: 3rem 1rem;
          }
        }
      `}</style>
    </section>
  )
}

export default EventList
