import React, { Component, Fragment } from "react";
import { Segment, Form, Button } from "semantic-ui-react";

class EventForm extends Component {
  state = {
    title: "",
    date: "",
    city: "",
    venue: "",
    hostedBy: ""
  };

  handleFormSubmit = e => {
    e.preventDefault();
    this.props.createEvent(this.state)
  };

  handleInputChange = ({ target: { name, value } }) => {
    this.setState({
      [name]: value
    });
    // let today = new Date();
    console.log(name, ":", value);
  };

  render() {
    const { closeForm } = this.props;
    const { title, date, city, venue, hostedBy } = this.state;
    return (
      <Fragment>
        <Segment>
          <Form onSubmit={this.handleFormSubmit} autoComplete="off">
            <Form.Field>
              <label>Event Title</label>
              <input
                name="title"
                value={title}
                onChange={this.handleInputChange}
                placeholder="Event Title"
              />
            </Form.Field>
            <Form.Field>
              <label>Event Date</label>
              <input
                name="date"
                value={date}
                type="date"
                onChange={this.handleInputChange}
                placeholder="Event Date"
              />
            </Form.Field>
            <Form.Field>
              <label>City</label>
              <input
                autoComplete="on"
                name="city"
                value={city}
                onChange={this.handleInputChange}
                placeholder="City event is taking place"
              />
            </Form.Field>
            <Form.Field>
              <label>Venue</label>
              <input
                name="venue"
                value={venue}
                onChange={this.handleInputChange}
                placeholder="Enter the Venue of the event"
              />
            </Form.Field>
            <Form.Field>
              <label>Hosted By</label>
              <input
                name="hostedBy"
                value={hostedBy}
                onChange={this.handleInputChange}
                placeholder="Enter the name of person hosting"
              />
            </Form.Field>
            <Button positive type="submit">
              Submit
            </Button>
            <Button type="button" onClick={closeForm}>
              Cancel
            </Button>
          </Form>
        </Segment>
      </Fragment>
    );
  }
}

export default EventForm;
