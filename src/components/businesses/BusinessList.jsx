import { useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import businesses from '../../data/businesses'
import searchIcon from '../../assets/icons/search_icon.png'

const businessCategories = [
  'Agriculture',
  'Automotive',
  'Business Services',
  'Community Services',
  'Cultural',
  'Education',
  'Entertainment',
  'Financial Services',
  'Food and Drink',
  'Healthcare',
  'Home Services',
  'Hospitality',
  'Legal Services',
  'Media',
  'Personal Care',
  'Pet Services',
  'Public Services',
  'Real Estate',
  'Retail',
  'Tour Agency',
]

function BusinessList() {
  const navigate = useNavigate()
  const [searchQuery, setSearchQuery] = useState('')

  const filteredBusinesses = useMemo(() => {
    const query = searchQuery.trim().toLowerCase()

    if (!query) return businesses

    return businesses.filter((business) => {
      const businessName = business.name.toLowerCase()
      const businessCategory = business.category.toLowerCase()

      return (
        businessName.includes(query) ||
        businessCategory.includes(query)
      )
    })
  }, [searchQuery])

  const groupedBusinesses = useMemo(() => {
    const groups = {}

    businessCategories.forEach((category) => {
      groups[category] = []
    })

    filteredBusinesses.forEach((business) => {
      if (groups[business.category]) {
        groups[business.category].push(business)
      }
    })

    businessCategories.forEach((category) => {
      groups[category].sort((a, b) =>
        a.name.localeCompare(b.name)
      )
    })

    return groups
  }, [filteredBusinesses])

  const visibleCategories = useMemo(() => {
    return businessCategories.filter(
      (category) => groupedBusinesses[category].length > 0
    )
  }, [groupedBusinesses])

  const hasResults = filteredBusinesses.length > 0

  return (
    <section className="business-list-section">
      <div className="business-list-shell">
        <div className="business-list-left">
          <h2 className="business-list-title">
            Explore Downtown Businesses
          </h2>

          <p className="business-list-subtitle">
            Search by business name or category and discover
            the shops, restaurants, services, and organizations
            that make downtown unique.
          </p>
        </div>

        <div className="business-list-right">
          <label
            htmlFor="business-search"
            className="business-search-label"
          >
            Search Businesses
          </label>

          <form
            className="business-search-row"
            onSubmit={(event) => event.preventDefault()}
          >
            <input
              id="business-search"
              type="text"
              className="business-search-input"
              placeholder="Search by name or category"
              value={searchQuery}
              onChange={(event) =>
                setSearchQuery(event.target.value)
              }
            />

            <button
              type="submit"
              className="business-search-button"
              aria-label="Search businesses"
            >
              <img
                src={searchIcon}
                alt=""
                className="business-search-icon"
              />
            </button>
          </form>

          {!hasResults && (
            <p className="business-empty-state">
              No Businesses Found
            </p>
          )}
        </div>

        {hasResults && (
          <div className="business-groups">
            {visibleCategories.map((category) => (
              <div
                key={category}
                className="business-group"
              >
                <h3 className="business-category-title">
                  {category}
                </h3>

                <ul className="business-category-list">
                  {groupedBusinesses[category].map(
                    (business) => (
                      <li
                        key={business.id}
                        className="business-category-item"
                      >
                        <button
                          type="button"
                          className="business-item-button"
                          onClick={() =>
                            navigate(
                              `/businesses/${business.id}`
                            )
                          }
                        >
                          <p className="business-name">
                            {business.name}
                          </p>

                          <p className="business-meta">
                            {business.address}
                          </p>
                        </button>
                      </li>
                    )
                  )}
                </ul>
              </div>
            ))}
          </div>
        )}
        </div>

        <style>{`
        .business-list-section {
          padding: 4rem 2rem;
          background:
            radial-gradient(circle at top right, rgba(208, 169, 96, 0.2), transparent 30%),
            linear-gradient(180deg, #fbf5eb 0%, #fffdf9 100%);
        }

        .business-list-shell {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1.25fr;
          gap: 2rem;
          align-items: start;
        }

        .business-list-left {
          justify-self: start;
          text-align: left;
        }

        .business-list-title {
          font-family: 'IBM Plex Serif', serif;
          font-size: 2rem;
          margin: 0 0 1rem 0;
          color: #1f1f1f;
        }

        .business-list-subtitle {
          margin: 0;
          font-family: 'IBM Plex Serif', serif;
          font-size: 1rem;
          line-height: 1.6;
          color: #404040;
        }

        .business-list-right {
          border-radius: 12px;
          padding: 1.5rem;
          padding-top: 0;
          text-align: left;
        }

        .business-search-label {
          display: block;
          font-family: 'IBM Plex Serif', serif;
          font-weight: 700;
          margin-bottom: 0.5rem;
          color: #2a2a2a;
          text-align: left;
        }

        .business-search-row {
          display: flex;
          justify-content: flex-start;
          align-items: center;
          gap: 0.5rem;
          margin-bottom: 1.5rem;
        }

        .business-search-input {
          width: min(100%, 420px);
          padding: 0.75rem 0.9rem;
          border: none;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(30, 20, 10, 0.16);
          font-size: 1rem;
          font-family: 'IBM Plex Serif', serif;
        }

        .business-search-input:focus {
          outline: 2px solid #F49671;
          outline-offset: 1px;
        }

        .business-search-button {
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
          transition:
            background-color 0.2s ease,
            box-shadow 0.2s ease;
        }

        .business-search-button:hover {
          background: #e57f58;
        }

        .business-search-button:active {
          box-shadow: none;
          transition: 0.3s;
          transform: scale(0.93);
        }

        .business-search-icon {
          width: 20px;
          height: 20px;
        }

        .business-empty-state {
          margin: 0;
          font-weight: 700;
          color: #be400e;
          font-family: 'IBM Plex Serif', serif;
        }

        .business-groups {
          grid-column: 1 / -1;
          background: #fff;
          border-radius: 8px;
          box-shadow: 0 4px 12px rgba(30, 20, 10, 0.16);
          padding: 1.5rem;
          display: grid;
          gap: 1rem;
        }

        .business-group {
          padding-top: 1rem;
        }

        .business-category-title {
          margin: 0 0 0.75rem 0;
          font-family: 'IBM Plex Serif', serif;
          font-size: 1.2rem;
          color: #8e300b;
        }

        .business-category-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: grid;
          gap: 0.7rem;
        }

        .business-category-item {
          background: #fbf7f2;
          border-radius: 8px;
          padding: 0;
        }

        .business-item-button {
          width: 100%;
          border: none;
          border-radius: 8px;
          background: transparent;
          text-align: left;
          padding: 0.75rem;
          cursor: pointer;
          transition: background-color 0.2s ease;
        }

        .business-item-button:hover {
          background: #f6ede4;
        }

        .business-name {
          margin: 0;
          font-family: 'IBM Plex Serif', serif;
          font-weight: 700;
          color: #2b2b2b;
        }

        .business-meta {
          margin: 0.25rem 0 0 0;
          font-family: 'IBM Plex Serif', serif;
          font-size: 0.9rem;
          color: #5a5a5a;
        }

        .business-category-empty {
          margin: 0;
          font-family: 'IBM Plex Serif', serif;
          color: #6b6b6b;
        }

        @media (max-width: 900px) {
          .business-list-shell {
            grid-template-columns: 1fr;
          }

          .business-search-row {
            justify-content: flex-start;
          }

          .business-groups {
            grid-column: 1;
          }
        }

        @media (max-width: 600px) {
          .business-list-section {
            padding: 3rem 1rem;
          }
        }
      `}</style>
    </section>
  )
}

export default BusinessList