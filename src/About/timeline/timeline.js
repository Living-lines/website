// Timeline.js or Timeline.jsx
import React from 'react';
import './timeline.css';

function Timeline() {
  return (
    <div className="timeline-container">
      <div className="timeline-line"></div>
      <div className="timeline-event" style={{ left: '5%' }}>
        <div className="event-circle">1999</div>
        <div className="event-content">
          <div className="event-title">Established</div>
          <p>Sai Balaji Marketing as a distributor for PVC pipes and electrical products.</p>
        </div>
      </div>
      <div className="timeline-event" style={{ left: '20%' }}>
        <div className="event-circle">2001</div>
        <div className="event-content">
          <div className="event-title">Started</div>
          <p>Retail outlet for Mercury Electricals & Engineering Company.</p>
        </div>
      </div>
      <div className="timeline-event" style={{ left: '35%' }}>
        <div className="event-circle">2006</div>
        <div className="event-content">
          <div className="event-title">Launching</div>
          <p>Living Lines featuring branded tiles and sanitaryware.</p>
        </div>
      </div>
      <div className="timeline-event" style={{ left: '50%' }}>
        <div className="event-circle">2010</div>
        <div className="event-content">
          <div className="event-title">Upgraded</div>
          <p>Living Lines showroom to 10,000 sq.ft. in Resapuvanipalem.</p>
        </div>
      </div>
      <div className="timeline-event" style={{ left: '65%' }}>
        <div className="event-circle">2015</div>
        <div className="event-content">
          <div className="event-title">Launching</div>
          <p>Living Space Italian Furniture Showroom, open with 10,000 sq.ft. in Madhurawada.</p>
        </div>
      </div>
      <div className="timeline-event" style={{ left: '80%' }}>
        <div className="event-circle">2021</div>
        <div className="event-content">
          <div className="event-title">Launching</div>
          <p>Living Lines 10,000 sq.ft. showroom in Madhurawada.</p>
        </div>
      </div>
      <div className="timeline-event" style={{ left: '95%' }}>
        <div className="event-circle">2024</div>
        <div className="event-content">
          <div className="event-title">Inaugurating a new milestone</div>
          <p>Living Lines & Living Space Tiles & Furniture showroom, now with a spacious 20,000 sq.ft in Vizianagaram.</p>
        </div>
      </div>
    </div>
  );
}

export default Timeline;