import { Button, Grid, TextField } from "@mui/material";
import axios from "axios";
import { GetServerSideProps } from "next";
import { useRouter } from "next/router";
import { useState } from "react";
import { useInput } from "../../hooks/useInput";
import MainLayout from "../../layouts/MainLayout";
import { ITrack } from "../../types/track";

const TrackPage = ({ serverTrack }) => {
  const [track, setTrack] = useState<ITrack>(serverTrack);
  const router = useRouter();
  const username = useInput("");
  const text = useInput("");

  const addComment = async () => {
    try {
      const { data } = await axios.post(
        "http://localhost:5000/tracks/comment",
        {
          username: username.value,
          text: text.value,
          trackId: track._id,
        }
      );
      setTrack({ ...track, comments: [...track.comments, data] });
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <MainLayout
      title={`${track.name} - ${track.artist}`}
      keywords={`music, artists, ${track.name}, ${track.artist}`}
    >
      <Button
        variant={"outlined"}
        style={{ fontSize: 16 }}
        onClick={() => router.push("/tracks")}
      >
        To list
      </Button>
      <Grid container style={{ margin: "20px 0" }}>
        <img
          src={"http://localhost:5000/" + track.picture}
          alt="picture"
          width={200}
          height={200}
        />
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
          {...username}
          style={{ marginBottom: "10px" }}
          label="Your name"
          fullWidth
        />
        <TextField {...text} label="Comment" fullWidth multiline rows={4} />
        <Button onClick={addComment}>Send</Button>
      </Grid>
      <div>
        {track.comments.map((comment) => (
          <div key={comment._id}>
            <h3>Author - {comment.username}</h3>
            <p>Comments - {comment.text}</p>
          </div>
        ))}
      </div>
    </MainLayout>
  );
};

export default TrackPage;

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { data } = await axios.get("http://localhost:5000/tracks/" + params.id);
  return {
    props: {
      serverTrack: data,
    },
  };
};
