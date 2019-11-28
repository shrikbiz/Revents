import React, { Component } from 'react';
import { Grid, Button } from 'semantic-ui-react';
import EventList from '../eventList/EventList';
import EventForm from '../eventForm/EventForm';
import {getEvents} from '../../../data/Data';


class EventDashboard extends Component {
    state = { 
        eventsFromDashboard: getEvents(),
        isOpen: false
     }

     handleIsOpenToggle =() =>{
        let {isOpen} =  this.state;
        isOpen = (isOpen)? false : true;
        // console.log(isOpen);
        this.setState({isOpen})
     }

     
     handleFormClose = () =>{
        let {isOpen} = this.state
        if(isOpen === true) isOpen = false;
        // console.log(isOpen);
        this.setState({isOpen})
     }



    render() { 
        const {eventsFromDashboard, isOpen} = this.state;

        return (
          <Grid>
            <Grid.Column width={10}>
              <EventList events={eventsFromDashboard} />
            </Grid.Column>
            <Grid.Column width={6}>
              <Button
                positive
                onClick={this.handleIsOpenToggle}
                content="Create Event"
              />
              {isOpen && <EventForm closeForm={this.handleFormClose} />}
            </Grid.Column>
          </Grid>
        );
    }
}
 
export default EventDashboard;