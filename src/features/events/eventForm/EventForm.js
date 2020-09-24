import cuid from "cuid";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Button, Form, Header, Segment } from "semantic-ui-react";
import { createEvent, updateEvent } from "../eventActions";

const EventForm = ({ match, history }) => {
  const dispatch = useDispatch();
  const selectedEvent = useSelector((state) =>
    state.event.events.find((event) => event.id === match.params.id)
  );

  const initialValues = selectedEvent ?? {
    title: "",
    category: "",
    description: "",
    city: "",
    venue: "",
    date: "",
  };

  const [values, setValues] = useState(initialValues);

  function handleInputChange(e) {
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  const handleFormSubmit = () => {
    selectedEvent
      ? dispatch(updateEvent({ ...selectedEvent, ...values }))
      : dispatch(
          createEvent({
            ...values,
            id: cuid(),
            hostedBy: "Bob",
            attendees: [],
            hostPhotoURL: "/assets/user.png",
          })
        );
    history.push("/events");
  };

  return (
    <Segment clearing>
      <Header content={selectedEvent ? "Edit Event" : "Create New Event"} />
      <Form onSubmit={handleFormSubmit}>
        <Form.Field>
          <input
            type="text"
            placeholder="Event Title"
            name="title"
            value={values.title}
            onChange={(e) => handleInputChange(e)}
          />
        </Form.Field>
        <Form.Field>
          <input
            name="category"
            value={values.category}
            onChange={(e) => handleInputChange(e)}
            type="text"
            placeholder="Category"
          />
        </Form.Field>
        <Form.Field>
          <input
            name="description"
            value={values.description}
            onChange={(e) => handleInputChange(e)}
            type="text"
            placeholder="Description"
          />
        </Form.Field>
        <Form.Field>
          <input
            name="city"
            value={values.city}
            onChange={(e) => handleInputChange(e)}
            type="text"
            placeholder="City"
          />
        </Form.Field>
        <Form.Field>
          <input
            name="venue"
            value={values.venue}
            onChange={(e) => handleInputChange(e)}
            type="text"
            placeholder="Venue"
          />
        </Form.Field>
        <Form.Field>
          <input
            name="date"
            value={values.date}
            onChange={(e) => handleInputChange(e)}
            type="date"
            placeholder="Date"
          />
        </Form.Field>
        <Button type="submit" floated="right" positive content="submit" />
        <Button as={Link} to="/events" floated="right" content="Cancel" />
      </Form>
    </Segment>
  );
};

export default EventForm;
