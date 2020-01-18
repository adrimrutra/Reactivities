import React, { Fragment } from 'react';
import { Container } from 'semantic-ui-react';
import { observer } from 'mobx-react-lite';
import { Route, withRouter, RouteComponentProps } from 'react-router-dom';
import NavBar from '../../features/nav/NavBar';
import ActivityDashboard from '../../features/activities/dashboard/ActivityDashboard';
import HomePage from '../../features/home/HomePage';
import ActivityForm from '../../features/activities/form/ActivityForm';
import ActivityDetails from '../../features/activities/details/ActivityDetails';

const App: React.FC<RouteComponentProps> = ({ location }) => {
  return (
    <Container>
      <Route exact path="/" component={HomePage} />
      <Route
        path={'/(.+)'}
        render={() => (
          <Fragment>
            <NavBar />
            <Container style={{ marginTop: '7em' }}>
              <Route exact path="/activities" component={ActivityDashboard} />
              <Route path="/activities/:id" component={ActivityDetails} />
              <Route
                key={location.key}
                path={['/createActivity', '/manege/:id']}
                component={ActivityForm}
              />
            </Container>
          </Fragment>
        )}
      />
    </Container>
  );
};

export default withRouter(observer(App));
