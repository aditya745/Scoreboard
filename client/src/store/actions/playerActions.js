import {
  GET_PLAYERS,
  ADD_PLAYERS,
  DELETE_PLAYERS,
  SORT_BY_SCORE
} from "./types";
import axios from "axios";

export const getPlayers = () => dispatch => {
  axios.get("/api/items").then(res =>
    dispatch({
      type: GET_PLAYERS,
      payload: res.data
    })
  );
};

export const addPlayers = player => dispatch => {
  axios.post("/api/items", player).then(res =>
    dispatch({
      type: ADD_PLAYERS,
      payload: res.data
    })
  );
};

export const deletePlayers = id => dispatch => {
  axios.delete(`/api/items/${id}`).then(res =>
    dispatch({
      type: DELETE_PLAYERS,
      payload: id
    })
  );
};
export const sortByScores = () => dispatch => {
  axios.get("/api/items").then(res =>
    dispatch({
      type: SORT_BY_SCORE,
      payload: res.data
    })
  );
};
