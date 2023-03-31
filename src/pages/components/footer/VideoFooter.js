import React from "react";
import "./videoFooter.css";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

function VideoFooter() {
  return (
    <div className="videoFooter">
      <div className="videoFooter__text">
        <h3>@fsaturn0</h3>
        <p>Videodescription</p>
        <div className="videoFooter__song">
          <MusicNoteIcon className="videoFooter__icon" />
          <div className="videoFooter__songTitle">
            <p>Title of music</p>
          </div>
        </div>
      </div>
      <img
        className="videoFooter__record"
        alt="an disc rotating"
        src="https://poqlymuephttfsljdabn.supabase.co/storage/v1/object/public/jornadadev/vinil.png"
      />
    </div>
  );
}

export default VideoFooter;
