import * as React from 'react';
import './style.css';
import Timetable from './Timetable';

export default function App() {
  return (
    <div>
      <Timetable />
    </div>
  );
}

export default function App() {
  return (
    <div style={{ backgroundColor: '#xxxx00' }}>
      <div className="toolbar">
        <div className="title">RNLI</div>
        <div className="nav">
          <div className="nav-item">Timetable</div>
          <div className="nav-item">Lifeguards</div>
          <div className="nav-item">Beaches</div>
          <div className="nav-item">Profile</div>
          <div className="nav-item">Contact</div>
        </div>
      </div>
      <div>
      <Timetable />
    </div>
    </div>
  );
}

