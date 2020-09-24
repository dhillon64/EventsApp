import React, { Fragment } from "react";
import EventListItem from "./EventListItem";

const EventList = (props) => {
  const { events } = props;

  return (
    <Fragment>
      {events.map((event) => (
        <EventListItem key={event.id} event={event} />
      ))}
    </Fragment>
  );
};

export default EventList;
