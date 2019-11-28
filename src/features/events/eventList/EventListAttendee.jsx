import React, { Component } from 'react';
import { List, Image } from 'semantic-ui-react';

class EventListAttendee extends Component {
    state = {  }
    render() { 
        const {photoURL} = this.props.attendee;
        // console.log(photoURL, name);
        return (
          <List.Item>
            <Image as='a' size="mini" circular src={photoURL} />
          </List.Item>
        );
    }
}
 
export default EventListAttendee;