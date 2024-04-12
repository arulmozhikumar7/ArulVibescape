// SongCard.jsx
import React from "react";
import { FaPlay, FaPause } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentSong, setIsPlaying } from "@store/actions/playerActions";

const SongCard = ({ name, artist, audioFile }) => {
  const dispatch = useDispatch();
  const currentSong = useSelector((state) => state.player.currentSong);
  const isPlaying = useSelector((state) => state.player.isPlaying);

  const handlePlayClick = () => {
    // If the clicked song is already playing, pause it
    if (currentSong === audioFile && isPlaying) {
      dispatch(setIsPlaying(false));
    } else if (currentSong === audioFile && !isPlaying) {
      dispatch(setIsPlaying(true));
    } else {
      // Otherwise, set the clicked song as the current song and start playing it
      dispatch(setCurrentSong(audioFile));
      dispatch(setIsPlaying(true));
    }
  };

  return (
    <>
      <div className="h-[250px] shadow-xl w-52 rounded-xl bg-zinc-900">
        <div>
          <div className="flex justify-center mt-3">
            <img
              src="https://i.scdn.co/image/ab67616d00001e028863bc11d2aa12b54f5aeb36"
              alt="Blinding Lights"
              className="w-40 h-40 rounded-sm"
            />
          </div>
          <div className="flex gap-3 mt-3 ml-6">
            <div>
              <h1 className="font-bold text-white "> {name}</h1>
              <p className=" text-[12px] text-white">{artist}</p>
            </div>
            <div className="mt-1">
              <button
                className="flex items-center justify-center w-10 h-10 rounded-full bg-primary"
                onClick={handlePlayClick}
              >
                {/* Toggle play/pause icon based on current song and playing status */}
                {currentSong === audioFile && isPlaying ? (
                  <FaPause className="text-xl text-white " />
                ) : (
                  <FaPlay className="text-xl text-white" />
                )}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SongCard;
