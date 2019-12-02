import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import EventList from '../eventList/EventList';
import EventForm from '../eventForm/EventForm';
import {getEvents} from '../../../data/Data';
import cuid from 'cuid'


class EventDashboard extends Component {
    state = { 
        events: getEvents(),
        isOpen: false
     }

     handleIsOpenToggle =() =>{
        let {isOpen} =  this.state;
        isOpen = (isOpen)? false : true;
        this.setState({isOpen})
     }

     
     handleFormClose = () =>{
        let {isOpen} = this.state
        if(isOpen === true) isOpen = false;
        this.setState({isOpen})
     }

     handleCreateEvent = (newEvent) => {
       newEvent.id = cuid();
       newEvent.hostPhotoURL = '/assets/user.png';
       this.setState({
         events: [...this.state.events, newEvent],
         isOpen: false
       });

      //  console.log(this.state.events);
      }


    render() { 
        const {events, isOpen} = this.state;

        return (
          <Grid>
            <Grid.Column width={10}>
              <EventList events={events} />
            </Grid.Column>
            <Grid.Column width={6}>
              <Button
                positive
                onClick={this.handleIsOpenToggle}
                content="Create Event"
              />
              {isOpen && <EventForm createEvent={this.handleCreateEvent} closeForm={this.handleFormClose} />}
            </Grid.Column>
          </Grid>
        );
    }
}
 
export default EventDashboard;