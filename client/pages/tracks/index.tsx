import { Box, Button, Card, Grid } from "@mui/material";
import { useRouter } from "next/router";
import TrackList from "../../components/TrackList";
import MainLayout from "../../layouts/MainLayout";
import { ITrack } from "../../types/track";

const Track = () => {
  const router = useRouter();
  const tracks: ITrack[] = [
    {
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
    },
    {
      _id: "2",
      name: "Track 2",
      artist: "Performer 2",
      text: "Some text here",
      listens: 69,
      picture:
        "http://localhost:5000/image/dd870ca1-7d9a-42e5-90b1-436a45a00460.jpeg",
      audio:
        "http://localhost:5000/audio/79688e0f-93f0-44d5-809b-63a6076b7e12.mp3",
      comments: [],
    },
    {
      _id: "3",
      name: "Track 3",
      artist: "Performer 3",
      text: "Some text here",
      listens: 42,
      picture:
        "http://localhost:5000/image/dd870ca1-7d9a-42e5-90b1-436a45a00460.jpeg",
      audio:
        "http://localhost:5000/audio/79688e0f-93f0-44d5-809b-63a6076b7e12.mp3",
      comments: [],
    },
  ];

  return (
    <MainLayout>
      <Grid container justifyContent={"center"}>
        <Card style={{ width: "900px" }}>
          <Box p={2}>
            <Grid container justifyContent={"space-between"}>
              <h2>Track List</h2>
              <Button onClick={() => router.push("/tracks/create")}>
                Load
              </Button>
            </Grid>
          </Box>
          <TrackList tracks={tracks} />
        </Card>
      </Grid>
    </MainLayout>
  );
};

export default Track;
