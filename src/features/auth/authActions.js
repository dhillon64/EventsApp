export const signInUser = (payload) => {
  return {
    type: "SIGN_IN_USER",
    payload: payload,
  };
};

export const signOutUser = () => {
  return {
    type: "SIGN_OUT_USER",
  };
};
