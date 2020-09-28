import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Grid } from "semantic-ui-react";
import EventFilters from "./EventFilters";
import EventList from "./EventList";
import { getEventsFromFirestore } from "../../../app/firestore/firestoreService";

const EventDashboard = () => {
  useEffect(() => {
    const unsubscribe = getEventsFromFirestore({
      next: (snapshot) =>
        console.log(snapshot.docs.map((docSnapshot) => docSnapshot.data())),
      error: (error) => console.log(error),
    });
    return unsubscribe;
  });

  const { events } = useSelector((state) => state.event);

  return (
    <Grid>
      <Grid.Column width={10}>
        <EventList events={events} />
      </Grid.Column>
      <Grid.Column width={6}>
        <EventFilters />
      </Grid.Column>
    </Grid>
  );
};

export default EventDashboard;
