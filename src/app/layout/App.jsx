import React, {Component, Fragment} from "react";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import NavBar from "../../features/nav/navBar/NavBar";
import { Container } from "semantic-ui-react";
import HomePage from '../../features/home/HomePage';
import EventDetailedPage from '../../features/events/eventDetailed/EventDetailedPage';
import PeopleDashboard from '../../features/user/peopleDashboard/PeopleDashboard';
import UserDetailedPage from '../../features/user/userDetailed/UserDetailedPage';
import SettingsDashboard from '../../features/user/settings/SettingsDashboard';
import EventForm from '../../features/events/eventForm/EventForm';
import TestComponents from '../../features/testArea/TestComponent';
import { withRouter, Route, Switch } from "react-router-dom";
import ModalManagaer from "../../features/modals/ModalManagaer";


class App extends Component {
render() {
  return (
    <Fragment>
      <ModalManagaer />
      <Route exact path="/" component={HomePage} />
      <Route
        path="/(.+)"
        render={() => (
          <Fragment>
            <NavBar />
            <Container className="main">
              <Switch key={this.props.location.key}>
                <Route path="/events/:id" component={EventDetailedPage} />
                <Route exact path="/events" component={EventDashboard} />
                <Route path="/people" component={PeopleDashboard} />
                <Route path="/profile/:id" component={UserDetailedPage} />
                <Route path="/settings" component={SettingsDashboard} />
                <Route
                  path={["/createEvent", "/manage/:id"]}
                  component={EventForm}
                />
                <Route path="/test" component={TestComponents} />
              </Switch>
            </Container>
          </Fragment>
        )}
      />
    </Fragment>
  );
};
}


export default withRouter(App);
