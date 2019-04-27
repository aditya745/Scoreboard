import {
  GET_PLAYERS,
  ADD_PLAYERS,
  DELETE_PLAYERS,
  SORT_BY_SCORE
} from "../actions/types";

const initialState = {
  players: []
};
export default function(state = initialState, action) {
  switch (action.type) {
    case GET_PLAYERS:
      return {
        ...state,
        players: action.payload
      };
    case ADD_PLAYERS:
      return {
        ...state,
        players: [...state.players, action.payload]
      };
    case DELETE_PLAYERS:
      return {
        ...state,
        players: state.players.filter(player => player._id !== action.payload)
      };
    case SORT_BY_SCORE:
      return {
        ...state,
        players: action.payload
      };
    default:
      return state;
  }
}
