import React, { Component, Fragment } from 'react';
import EventListItem from './EventListItem';

class EventList extends Component {
    state = { 
     }
    render() {
      const {events} = this.props;
      // console.log(this.props.events);
        return (
          <Fragment>
            {events.map(event =>{
              return <EventListItem key={event.id} event={event} />
            })}
          </Fragment>
        );
    }
}
 
export default EventList;