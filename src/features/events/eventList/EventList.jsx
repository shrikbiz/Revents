import React, { Component, Fragment } from "react";
import EventListItem from "./EventListItem";

class EventList extends Component {
  render() {
    const { events, selectEvent, deleteEvent } = this.props;
    // console.log(this.props.events);
    return (
      <Fragment>
        {events.map(event =>  {return (
            <EventListItem
              key={event.id}
              selectEvent={selectEvent}
              deleteEvent={deleteEvent}
              event={event}
            />
          )}
          )}
      </Fragment>
    );
  }
}

export default EventList;
