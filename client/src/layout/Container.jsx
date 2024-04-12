import React, { useEffect, useState } from "react";
import SongCard from "@components/SongCard";
import { useFetchSongs } from "@hooks/fetchSongs";
const Container = () => {
  const [allSongs, setAllSongs] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const songs = await useFetchSongs();
      setAllSongs(songs);
    };

    fetchData();
  }, []);

  return (
    <div className="h-[75vh] ">
      <div className="grid grid-cols-12">
        <div className="col-span-2"></div>
        <div className="h-full col-span-10 m-2 rounded-3xl">
          <div className="grid grid-cols-4 gap-4 p-5">
            {allSongs.map((song) => (
              <SongCard key={song._id} {...song} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Container;
