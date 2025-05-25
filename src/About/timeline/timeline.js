import React, { useRef } from 'react';
import './timeline.css';

function Timeline() {
  const containerRef = useRef(null);

  const scrollTimeline = (direction) => {
    const container = containerRef.current;
    if (!container) return;
    const scrollAmount = direction === 'left' ? -300 : 300;
    container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  const events = [
    {
      year: 1999,
      title: 'Established',
      description: 'Sai Balaji Marketing as a distributor for PVC pipes and electrical products.',
    },
    {
      year: 2001,
      title: 'Started',
      description: 'Retail outlet for Mercury Electricals & Engineering Company.',
    },
    {
      year: 2006,
      title: 'Launching',
      description: 'Living Lines featuring branded tiles and sanitaryware in <strong>Visakhapatnam</strong>.',
    },
    {
      year: 2010,
      title: 'Upgraded',
      description: 'Living Lines showroom upgraded to 10,000 sq.ft. in <strong>Resapuvanipalem</strong>.',
    },
    {
      year: 2015,
      title: 'Launching',
      description: 'Living Space Italian Furniture Showroom opened with 10,000 sq.ft. in <strong>Madhurawada</strong>.',
    },
    {
      year: 2021,
      title: 'Launching',
      description: 'Living Lines 10,000 sq.ft. showroom launched in <strong>Madhurawada</strong>.',
    },
    {
      year: 2024,
      title: 'Inaugurating a new milestone',
      description: 'Living Lines & Living Space Tiles & Furniture showroom now with 20,000 sq.ft in <strong>Vizianagaram</strong>.',
    },
    {
      year: currentYear,
      title: 'Present',
      description: '<em>Creating tomorrow’s lifestyle today.</em>',
    },
  ];

  return (
    <div className='timeline-wrapper'>
      <h1 className='timeline-heading'>Our History</h1>
      <p className='timeline-tagline'>Celebrating the journey of excellence</p>

      <button className="arrow-btn left" onClick={() => scrollTimeline('left')}>&#10094;</button>
      <button className="arrow-btn right" onClick={() => scrollTimeline('right')}>&#10095;</button>

      <div className="timeline-container" ref={containerRef}>
        <div className="timeline-line"></div>
        {events.map((event, index) => (
           <div
        key={index}
        className={`timeline-event ${event.year === currentYear ? 'present' : ''}`}
      >
            <div className="event-circle">
              {event.year === currentYear ? (
                <>
                  <span className="present-year">{event.year}</span>
                  <div className="present-tag">Now</div>
                </>
              ) : (
                event.year
              )}
            </div>
            <div className="event-content">
              <div className="event-title">{event.title}</div>
              <p dangerouslySetInnerHTML={{ __html: event.description }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Timeline;
