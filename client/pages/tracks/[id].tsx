import { Button, Grid, TextField } from "@mui/material";
import { useRouter } from "next/router";
import MainLayout from "../../layouts/MainLayout";
import { ITrack } from "../../types/track";

const TrackPage = () => {
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
  const router = useRouter();

  return (
    <MainLayout>
      <Button
        variant={"outlined"}
        style={{ fontSize: 16 }}
        onClick={() => router.push("/tracks")}
      >
        To list
      </Button>
      <Grid container style={{ margin: "20px 0" }}>
        <img src={track.picture} alt="picture" width={200} height={200} />
        <div>
          <h3>Track name - {track.name}</h3>
          <h3>Performer - {track.artist}</h3>
          <h3>Listens - {track.listens}</h3>
        </div>
      </Grid>
      <h2>Track words</h2>
      <p>{track.text}</p>
      <h2>Comments</h2>
      <Grid container>
        <TextField
          style={{ marginBottom: "10px" }}
          label="Your name"
          fullWidth
        />
        <TextField label="Comment" fullWidth multiline rows={4} />
        <Button>Send</Button>
      </Grid>
      <div>
        {track.comments.map((comment) => (
          <div>
            <h3>Author - {comment.username}</h3>
            <p>Comments - {comment.text}</p>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default TrackPage;
