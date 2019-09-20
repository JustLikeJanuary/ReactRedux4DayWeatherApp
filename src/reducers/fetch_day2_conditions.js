const fetchDay2Conditions = (
  state = {
    conditionsDay2: []
  },
  action
) => {
  if (action.type === "FETCH_CONDITIONS_DAY_2") {
    state = { ...state, conditionsDay2: action.payload };
  }
  return state;
};

export default fetchDay2Conditions;
