const fetchDay1Conditions = (
  state = {
    conditionsDay1: []
  },
  action
) => {
  if (action.type === "FETCH_CONDITIONS_DAY_1") {
    state = { ...state, conditionsDay1: action.payload };
  }
  return state;
};

export default fetchDay1Conditions;
