import React, {Fragment} from "react";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import NavBar from "../../features/nav/navBar/NavBar";
import { Container } from "semantic-ui-react";
import {Route} from 'react-router-dom';
import HomePage from '../../features/home/HomePage';
import EventDetailedPage from '../../features/events/eventDetailed/EventDetailedPage';
import PeopleDashboard from '../../features/user/peopleDashboard/PeopleDashboard';
import UserDetailedPage from '../../features/user/userDetailed/UserDetailedPage';
import SettingsDashboard from '../../features/user/settings/SettingsDashboard';
import EventForm from '../../features/events/eventForm/EventForm';

function App() {

  // return(
  //   <Fragment>
  //     <NavBar />
  //     <Container className='main'>
  //     <Route path='/' component={EventDashboard} />
  //     </Container>
  //   </Fragment>
  // )
  return (
    <Fragment>
      <Route exact path="/" component={HomePage} />
      <Route
        path="/(.+)"
        render={() => (
          <Fragment>
            <NavBar />
            <Container className="main">
              <Route path="/events" component={EventDashboard} />
              <Route path="/events/:id" component={EventDetailedPage} />
              <Route path="/people" component={PeopleDashboard} />
              <Route path="/profile/:id" component={UserDetailedPage} />
              <Route path="/settings" component={SettingsDashboard} />
              <Route path="/createEvent" component={EventForm} />
            </Container>
          </Fragment>
        )}
      />
    </Fragment>
  );
}

export default App;
