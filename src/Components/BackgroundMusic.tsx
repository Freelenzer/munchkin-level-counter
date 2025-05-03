import { useState, useRef } from "react";
import Howler from "react-howler";
import soundOn from '../assets/sound_on.png';
import soundOff from '../assets/sound_off.png';
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
      <button
        onClick={() => setPlaying(!playing)}
        style={{
          color: "black",
          backgroundColor: "none",
          border: "none",
        }}
      >
        <img
          src={playing ? soundOn : soundOff}
          style={{ height: "100px" }}
        />
      </button>
    </div>
  );
};

export default BackgroundMusic;
