import axios from "axios";

// ACTION TYPES
// YOU MAKE THEM!!

export const ACTIONS = {
  LOAD_CAT: "LOAD_CAT"
};

// INITIAL STATE
const initialState = {};

// ACTION CREATORS
export const loadCat = data => ({
  // what kinda stuff goes in here?
  type: ACTIONS.LOAD_CAT,
  cat: data
});

// THUNK CREATORS
export const fetchCat = id => async dispatch => {
  // YOUR CODE HERE
  const cat = (await axios.get(`/api/cats/${id}/`)).data;
  dispatch(loadCat(cat));
};

// REDUCER
// just modify inside the switch statement by adding cases.
// don't modify what the function takes
export default function(state = initialState, action) {
  switch (action.type) {
    case "LOAD_CAT":
      state = action.cat;
      return state;
    default:
      return state;
  }
}
