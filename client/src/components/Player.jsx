// Player.jsx
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { setIsPlaying } from "@store/actions/playerActions";

const Player = () => {
  const currentSong = useSelector((state) => state.player.currentSong);
  const isPlaying = useSelector((state) => state.player.isPlaying);
  const dispatch = useDispatch();

  console.log("Current song in Player:", currentSong);
  console.log("Is playing in Player:", isPlaying);

  return (
    <div>
      <AudioPlayer
        onPlaying={() => {
          dispatch(setIsPlaying(true));
        }}
        src={
          currentSong
            ? `http://localhost:3000/media/songs/${currentSong}`
            : null
        }
        onPause={() => {
          dispatch(setIsPlaying(false));
        }}
        onPlay={() => {
          dispatch(setIsPlaying(true));
        }}
      />
    </div>
  );
};

export default Player;
