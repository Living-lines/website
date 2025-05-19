import React from 'react';
import './timeline.css';

function Timeline() {
  return (
    <div>
      <h1 className='timeline-heading'>Our History</h1>
      <div className="timeline-container">
        <div className="timeline-line"></div>
        {[
          {
            year: 1999,
            title: 'Established',
            description: 'Sai Balaji Marketing as a distributor for PVC pipes and electrical products.'
          },
          {
            year: 2001,
            title: 'Started',
            description: 'Retail outlet for Mercury Electricals & Engineering Company.'
          },
          {
            year: 2006,
            title: 'Launching',
            description: 'Living Lines featuring branded tiles and sanitaryware.'
          },
          {
            year: 2010,
            title: 'Upgraded',
            description: 'Living Lines showroom to 10,000 sq.ft. in <strong>Resapuvanipalem, Visakhapatnam</strong>.'
          },
          {
            year: 2015,
            title: 'Launching',
            description: 'Living Lines 10,000 sq.ft. showroom in <strong>Madhurawada</strong>.'
          },
          {
            year: 2021,
            title: 'Launching',
            description: 'Living Space Italian Furniture Showroom, open with 10,000 sq.ft. in <strong>Madhurawada</strong>.'
          },
          {
            year: 2024,
            title: 'Inaugurating a new milestone',
            description: 'Living Lines & Living Space Tiles & Furniture showroom, now with a spacious 20,000 sq.ft in <strong>Vizianagaram</strong>.'
          }
        ].map((event, index) => (
          <div
            key={index}
            className="timeline-event"
            style={{ left: `${5 + index * 15}%` }}
          >
            <div className="event-circle">{event.year}</div>
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
