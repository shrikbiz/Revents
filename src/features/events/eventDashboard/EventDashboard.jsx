import React, { Component } from "react";
import { Grid, Button } from "semantic-ui-react";
import EventList from "../eventList/EventList";
import EventForm from "../eventForm/EventForm";
import { getEvents } from "../../../data/Data";
import cuid from "cuid";



class EventDashboard extends Component {
  state = {
    events: getEvents(),
    isOpen: false,
    selectedEvent: null
  };

  handleFormOpen = () => {
    this.setState({
      isOpen: true,
      selectedEvent: null
    });
  };

  handleFormClose = () => {
    this.setState({
      isOpen: false
    });
  };

  handleCreateEvent = newEvent => {
    newEvent.id = cuid();
    newEvent.hostPhotoURL = "/assets/user.png";
    this.setState({
      events: [...this.state.events, newEvent],
      isOpen: false
    });
  };

  handleSelectEvent = e => {
    this.setState({
      selectedEvent: e,
      isOpen: true
    });
  };

  handleUpdateEvent = updatedEvent => {
    this.setState(({ events }) => ({
      events: events.map(event => {
        if (event.id === updatedEvent.id) {
          return { ...updatedEvent };
        } else {
          return event;
        }
      }),
      isOpen: false,
      selectedEvent: null
    }));
  };

  handleDeleteEvent = id => {
    this.setState(({ events }) => ({
      events: events.filter(e => e.id !== id)
    }));
  };

  render() {
    const { events, isOpen, selectedEvent } = this.state;

    return (
      <Grid>
        <Grid.Column width={10}>
          <EventList selectEvent={this.handleSelectEvent} deleteEvent={this.handleDeleteEvent} events={events} />
        </Grid.Column>
        <Grid.Column width={6}>
          <Button
            positive
            onClick={this.handleFormOpen}
            content="Create Event"
          />
          {isOpen && (
            <EventForm
              key={selectedEvent ? selectedEvent.id : 0}
              updatedEvent={this.handleUpdateEvent}
              selectedEvent={selectedEvent}
              createEvent={this.handleCreateEvent}
              closeForm={this.handleFormClose}
            />
          )}
        </Grid.Column>
      </Grid>
    );
  }
}

export default EventDashboard;
