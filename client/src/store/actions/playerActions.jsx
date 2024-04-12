export const SET_CURRENT_SONG = "SET_CURRENT_SONG";
export const IS_PLAYING = "IS_PLAYING";
export const setCurrentSong = (song) => ({
  type: SET_CURRENT_SONG,
  payload: song,
});

export const setIsPlaying = (isPlaying) => ({
  type: IS_PLAYING,
  payload: isPlaying,
});
