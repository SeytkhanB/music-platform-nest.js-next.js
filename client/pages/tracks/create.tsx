import { Button, Grid, TextField } from "@mui/material";
import axios from "axios";
import { useRouter } from "next/router";
import { useState } from "react";
import FileUpload from "../../components/FileUpload";
import StepWrapper from "../../components/StepWrapper";
import { useInput } from "../../hooks/useInput";
import MainLayout from "../../layouts/MainLayout";

const Create = () => {
  const [activeStepState, setActiveStepState] = useState(0);
  const [pictureState, setPictureState] = useState(null);
  const [audioState, setAudioState] = useState(null);
  const name = useInput("");
  const artist = useInput("");
  const text = useInput("");

  const router = useRouter();

  const next = () => {
    if (activeStepState !== 2) {
      setActiveStepState((prevState) => prevState + 1);
    } else {
      const formData = new FormData();
      formData.append("name", name.value);
      formData.append("artist", artist.value);
      formData.append("text", text.value);
      formData.append("picture", pictureState);
      formData.append("audio", audioState);
      axios
        .post("http://localhost:5000/tracks", formData)
        .then((res) => router.push("/tracks"))
        .catch((err) => console.log("Cannot load track! Please try again."));
    }
  };

  const prev = () => {
    setActiveStepState((prevState) => prevState - 1);
  };

  return (
    <MainLayout>
      <StepWrapper activeStep={activeStepState}>
        {activeStepState === 0 && (
          <Grid container direction={"column"} style={{ padding: 20 }}>
            <TextField
              {...name}
              style={{ marginTop: 10 }}
              label={"Track name"}
            />
            <TextField
              {...artist}
              style={{ marginTop: 10 }}
              label={"Performers name"}
            />
            <TextField
              {...text}
              style={{ marginTop: 10 }}
              label={"Tracks words"}
              multiline
              rows={3}
            />
          </Grid>
        )}

        {activeStepState === 1 && (
          <FileUpload setFile={setPictureState} accept="image/*">
            <Button>Load image</Button>
          </FileUpload>
        )}

        {activeStepState >= 2 && (
          <FileUpload setFile={setAudioState} accept="audio/*">
            <Button>Load audio</Button>
          </FileUpload>
        )}
      </StepWrapper>

      <Grid container justifyContent={"space-between"}>
        <Button
          variant="outlined"
          disabled={activeStepState === 0}
          onClick={prev}
        >
          Prev
        </Button>
        <Button variant="outlined" onClick={next}>
          Next
        </Button>
      </Grid>
    </MainLayout>
  );
};

export default Create;
