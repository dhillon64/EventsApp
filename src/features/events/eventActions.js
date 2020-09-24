export const createEvent = (event) => {
  return {
    type: "CREATE_EVENT",
    payload: event,
  };
};

export const updateEvent = (event) => {
  return {
    type: "UPDATE_EVENT",
    payload: event,
  };
};

export const deleteEvent = (eventid) => {
  return {
    type: "DELETE_EVENT",
    payload: eventid,
  };
};
