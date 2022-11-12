import { Box, Button, Card, Grid } from "@mui/material";
import { useRouter } from "next/router";
import TrackList from "../../components/TrackList";
import { useActions } from "../../hooks/useAction";
import { useTypedSelector } from "../../hooks/useTypedSelector";
import MainLayout from "../../layouts/MainLayout";
import { NextThunkDispatch, wrapper } from "../../store";
import { fetchTracks } from "../../store/actions-creators/track";

const Track = () => {
  const router = useRouter();
  const { tracks, error } = useTypedSelector((state) => state.tracks);

  const {} = useActions();

  if (error) {
    return (
      <MainLayout>
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

export const getServerSideProps = wrapper.getServerSideProps(
  (store) =>
    async ({ req, res }) => {
      const dispatch = store.dispatch as NextThunkDispatch;
      await dispatch(await fetchTracks());
    }
);
