import React, { Component } from 'react';

import Modal from '../components/Modal/Modal';

import './Events.css';

class EventsPage extends Component {
  render() {
    return (
      <React.Fragment>
        <Modal title="Add Event" canCancel canCofitm>Modal Content</Modal>
        <div className="events-control">
          <p>Share your own events!</p>
          <button className="btn">Create Event</button>
        </div>
      </React.Fragment>
    );
  }
}

export default EventsPage;