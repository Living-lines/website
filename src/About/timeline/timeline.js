/*import React from 'react';
import './timeline.css';

function Timeline() {
  const events = [
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
    },
    
  ];

  return (
    <div>
      <h1 className='timeline-heading'>Our History</h1>
      <div className="timeline-container">
        <div className="timeline-line"></div>
        <div className="timeline-events">
          {events.map((event, index) => (
            <div key={index} className="timeline-event">
              <div className="event-circle">{event.year}</div>
              <div className="event-content">
                <div className="event-title">{event.title}</div>
                <p dangerouslySetInnerHTML={{ __html: event.description }} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Timeline;
*/


import React from 'react';
import './timeline.css';

function Timeline() {
  const milestones = [
    {
      year: 1999,
      label: 'Established',
      info: 'Sai Balaji Marketing as a distributor for PVC pipes and electrical products.'
    },
    {
      year: 2001,
      label: 'Started',
      info: 'Retail outlet for Mercury Electricals & Engineering Company.'
    },
    {
      year: 2006,
      label: 'Launching',
      info: 'Living Lines featuring branded tiles and sanitaryware.'
    },
    {
      year: 2010,
      label: 'Upgraded',
      info: 'Living Lines showroom to 10,000 sq.ft. in <strong>Resapuvanipalem, Visakhapatnam</strong>.'
    },
    {
      year: 2015,
      label: 'Launching',
      info: 'Living Lines 10,000 sq.ft. showroom in <strong>Madhurawada</strong>.'
    },
    {
      year: 2021,
      label: 'Launching',
      info: 'Living Space Italian Furniture Showroom, open with 10,000 sq.ft. in <strong>Madhurawada</strong>.'
    },
    {
      year: 2024,
      label: 'Inaugurating a new milestone',
      info: 'Living Lines & Living Space Tiles & Furniture showroom, now with a spacious 20,000 sq.ft in <strong>Vizianagaram</strong>.'
    }
  ];

  return (
    <section className="history-wrapper">
      <h2 className="history-heading">Our Journey</h2>
      <div className="timeline-wrapper">
        <div className="timeline-line"></div>
        <div className="timeline-items">
          {milestones.map((milestone, index) => (
            <div className="timeline-point" key={index}>
              <div className="point-circle">{milestone.year}</div>
              <div className="point-detail">
                <div className="point-title">{milestone.label}</div>
                <p
                  className="point-text"
                  dangerouslySetInnerHTML={{ __html: milestone.info }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Timeline;
