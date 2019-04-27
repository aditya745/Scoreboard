import { combineReducers } from "redux";
import playerReducer from "./playerReducer";
import { reducer as reducerForm } from "redux-form";
export default combineReducers({
  playerReducer: playerReducer,
  form: reducerForm
});
