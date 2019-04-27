import {
  GET_PLAYERS,
  ADD_PLAYERS,
  DELETE_PLAYERS,
  SORT_BY_SCORE
} from "../actions/types";

const initialState = {
  players: [],
  sortedPlayers: []
};
export default function(state = initialState, action) {
  console.log("back", state);
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
        sortedPlayers: state.players.sort((a, b) => b.score - a.score)
      };
    default:
      return state;
  }
}
