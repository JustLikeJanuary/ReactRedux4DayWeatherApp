const fetchDay3Conditions = (
  state = {
    conditionsDay3: []
  },
  action
) => {
  if (action.type === "FETCH_CONDITIONS_DAY_3") {
    state = { ...state, conditionsDay3: action.payload };
  }
  return state;
};

export default fetchDay3Conditions;
