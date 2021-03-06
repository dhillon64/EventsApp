const initialState = {
  authenticated: true,
  currentUser: {
    email: "dhillon@test.com",
    photoURL: "/assets/user.png",
  },
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case "SIGN_IN_USER":
      return {
        ...state,
        authenticated: true,
        currentUser: {
          email: action.payload.email,
          photoURL: "/assets/user.png",
        },
      };
    case "SIGN_OUT_USER":
      return {
        ...state,
        authenticated: false,
        currentUser: null,
      };
    default:
      return state;
  }
}
