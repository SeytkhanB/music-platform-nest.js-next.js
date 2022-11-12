import { Box, Button, Card, Grid, TextField } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";
import { useDispatch } from "react-redux";
import TrackList from "../../components/TrackList";
import { useActions } from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import MainLayout from "../../layouts/MainLayout";
import { NextThunkDispatch, wrapper } from "../../store";
import { fetchTracks, searchTracks } from "../../store/actions-creators/track";

const Track = () => {
  const router = useRouter();
  const { tracks, error } = useTypedSelector((state) => state.tracks);
  const {} = useActions();
  const [query, setQuery] = useState<string>("");
  const [timer, setTimer] = useState(null);
  const dispatch = useDispatch() as NextThunkDispatch;

  const search = async (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);

    if (timer) {
      clearTimeout(timer);
    }

    setTimer(
      setTimeout(async () => {
        await dispatch(await searchTracks(e.target.value));
      }, 500)
    );
  };

  if (error) {
    return (
      <MainLayout title={error}>
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            color: "red",
          }}
        >
          {error}
        </h2>
      </MainLayout>
    );
  }

  return (
    <MainLayout title={"Track list"}>
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
          <TextField fullWidth value={query} onChange={search} />
          <TrackList tracks={tracks} />
        </Card>
      </Grid>
    </MainLayout>
  );
};

export default Track;

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res }) => {
      const dispatch = store.dispatch as NextThunkDispatch;
      await dispatch(await fetchTracks());
    }
);
