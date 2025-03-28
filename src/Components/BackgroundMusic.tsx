import { useState, useRef } from "react";
import Howler from "react-howler";

const BackgroundMusic = () => {
  const [playing, setPlaying] = useState(false);
  const streamUrl =
    "https://music-server-production-f8ac.up.railway.app/music/tavern-music.mp3";
  const playerRef = useRef<Howler | null>(null);

  return (
    <div>
      <Howler
        ref={(ref) => (playerRef.current = ref)}
        src={streamUrl}
        playing={playing}
        loop
        volume={0.5}
        html5={true}
        format={["mp3", "ogg"]}
      />
      <button onClick={() => setPlaying(!playing)}>
        {playing ? "Pause" : "Play"}
      </button>
    </div>
  );
};

export default BackgroundMusic;
