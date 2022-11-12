import { Pause, PlayArrow, VolumeUp } from "@mui/icons-material";
import { Grid, IconButton } from "@mui/material";
import styles from "../styles/Player.module.sass";
import { ITrack } from "../types/track";
import TrackProgress from "./TrackProgress";

const Player = () => {
  const track: ITrack = {
    _id: "1",
    name: "Track 1",
    artist: "Performer 1",
    text: "Some text here",
    listens: 21,
    picture:
      "http://localhost:5000/image/dd870ca1-7d9a-42e5-90b1-436a45a00460.jpeg",
    audio:
      "http://localhost:5000/audio/79688e0f-93f0-44d5-809b-63a6076b7e12.mp3",
    comments: [],
  };
  const active = false;

  return (
    <div className={styles.player}>
      <IconButton onClick={(e) => e.stopPropagation()}>
        {active ? <Pause /> : <PlayArrow />}
      </IconButton>

      <Grid
        container
        direction="column"
        style={{ width: 200, margin: "0 20px" }}
      >
        <div>{track.name}</div>
        <div style={{ fontSize: 12, color: "gray" }}>{track.artist}</div>
      </Grid>

      <TrackProgress left={0} right={100} onChange={() => {}} />
      <VolumeUp style={{ marginLeft: "auto" }} />
      <TrackProgress left={0} right={100} onChange={() => {}} />
    </div>
  );
};

export default Player;
