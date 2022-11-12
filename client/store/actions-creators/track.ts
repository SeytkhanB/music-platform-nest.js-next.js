import axios from "axios";
import { Dispatch } from "react";
import { TrackAction, TrackActionTypes } from "../../types/track";

export const fetchTracks = () => {
  return async (dispatch: Dispatch<TrackAction>) => {
    try {
      const { data } = await axios.get("http://localhost:5000/tracks");
      dispatch({ type: TrackActionTypes.FETCH_TRACKS, payload: data });
    } catch (error) {
      dispatch({
        type: TrackActionTypes.FETCH_TRACKS_ERROR,
        payload: "Cannot load tracks! Something went wrong.",
      });
    }
  };
};

export const searchTracks = (query: string) => {
  return async (dispatch: Dispatch<TrackAction>) => {
    try {
      const { data } = await axios.get(
        `http://localhost:5000/tracks/search?query=${query}`
      );
      dispatch({ type: TrackActionTypes.FETCH_TRACKS, payload: data });
    } catch (error) {
      dispatch({
        type: TrackActionTypes.FETCH_TRACKS_ERROR,
        payload: "Cannot load tracks! Something went wrong.",
      });
    }
  };
};
