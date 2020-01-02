import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import EventList from "../eventList/EventList";
import { connect } from 'react-redux';
import { createEvent, deleteEvent, updateEvent } from "../eventActions";


const mapState = (state) => ({
  events: state.events
})

const actions ={
  createEvent,
  deleteEvent,
  updateEvent
}

class EventDashboard extends Component {
 
  handleDeleteEvent = id => {
    this.props.deleteEvent(id)
  };

  render() {
    const {events} = this.props;
    let tempStyle = {
      border: '5px dashed blue',
      borderRadius: '.5em',
      color: 'green'
    }

    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList  deleteEvent={this.handleDeleteEvent} events={events} />
        </Grid.Column>
        <Grid.Column width={6}>
         <h2 style={tempStyle}>Activity Feed Coming Soon</h2>
        </Grid.Column>
      </Grid>
    );
  }
}

export default connect(mapState, actions)(EventDashboard);
