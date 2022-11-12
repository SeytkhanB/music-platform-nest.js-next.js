import { Button, Grid, TextField } from "@mui/material";
import { useState } from "react";
import FileUpload from "../../components/FileUpload";
import StepWrapper from "../../components/StepWrapper";
import MainLayout from "../../layouts/MainLayout";

const Create = () => {
  const [activeStepState, setActiveStepState] = useState(0);
  const [pictureState, setPictureState] = useState(null);
  const [audioState, setAudioState] = useState(null);

  const next = () => {
    if (activeStepState > 2) return;
    setActiveStepState((prevState) => prevState + 1);
  };

  const prev = () => {
    setActiveStepState((prevState) => prevState - 1);
  };

  return (
    <MainLayout>
      <StepWrapper activeStep={activeStepState}>
        {activeStepState === 0 && (
          <Grid container direction={"column"} style={{ padding: 20 }}>
            <TextField style={{ marginTop: 10 }} label={"Track name"} />
            <TextField style={{ marginTop: 10 }} label={"Performers name"} />
            <TextField
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
