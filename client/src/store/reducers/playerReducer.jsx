import { SET_CURRENT_SONG } from "../actions/playerActions";
import { IS_PLAYING } from "../actions/playerActions";
const initialState = {
  currentSong: null,
  isPlaying: false,
};

const playerReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_SONG:
      return {
        ...state,
        currentSong: action.payload,
      };
    case IS_PLAYING:
      return {
        ...state,
        isPlaying: action.payload,
      };
    default:
      return state;
  }
};

export default playerReducer;
