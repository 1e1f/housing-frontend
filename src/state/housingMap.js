import { assocPath } from 'ramda';

export const CHANGE_WAGES = 'CHANGE_WAGES';

export const INITIAL_STATE = {
  stories: [],
  controls: {
    wages: 10,
  },
};

export const changeWages = payload => ({
  type: CHANGE_WAGES,
  payload,
});

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CHANGE_WAGES:
      return assocPath(['controls', 'wages'], action.payload, state);
    default:
      return state;
  }
};

export default reducer;
