import React, { Fragment } from "react";
import { Route, useLocation } from "react-router-dom";
import { Container } from "semantic-ui-react";
import EventDashboard from "../../features/events/eventDashboard/EventDashboard";
import EventDetailedPage from "../../features/events/eventDetailed/EventDetailedPage";
import NavBar from "../../features/nav/NavBar";
import HomePage from "../../features/Home/HomePage";
import EventForm from "../../features/events/eventForm/EventForm";

const App = () => {
  const { key } = useLocation();

  return (
    <Fragment>
      <Route path="/" exact component={HomePage} />
      <Route
        path={"/(.+)"}
        render={() => (
          <Fragment>
            <NavBar />
            <Container className="main">
              <Route path="/events" exact component={EventDashboard} />
              <Route path="/events/:id" exact component={EventDetailedPage} />
              <Route
                path={["/createEvent", "/manage/:id"]}
                exact
                component={EventForm}
                key={key}
              />
            </Container>
          </Fragment>
        )}
      />
    </Fragment>
  );
};

export default App;
