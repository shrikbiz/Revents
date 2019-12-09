import React, { Component } from "react";
import { connect } from "react-redux";
import { incrementCounter, decrementCounter } from "./testActions";
import { Button } from "semantic-ui-react";

//connect here is Higher Order Component

const mapStateToProps = state => ({
  data: state.test.data
});

const actions =  {
  incrementCounter,
  decrementCounter
};

class TestComponents extends Component {
  render() {
      const {data, incrementCounter, decrementCounter} = this.props;
    return (
      <div>
        <h1>The data coming from Reducer Store: {data}</h1>
        <Button onClick={incrementCounter} positive content="Increment" />
        <Button onClick={decrementCounter} negative content="Decrement" />
      </div>
    );
  }
}

export default connect(mapStateToProps, actions)(TestComponents);
