import { Card, Container, Grid, Step, StepLabel, Stepper } from "@mui/material";

const steps = ["Information about track", "Load cover", "Load track"];

const StepWrapper: React.FC<{
  activeStep: number;
  children: React.ReactNode;
}> = ({ activeStep, children }) => {
  return (
    <Container>
      <Stepper activeStep={activeStep}>
        {steps.map((step, index) => (
          <Step key={index} completed={activeStep > index}>
            <StepLabel>{step}</StepLabel>
          </Step>
        ))}
      </Stepper>
      <Grid
        container
        justifyContent="center"
        style={{ margin: "70px 0", height: "270px" }}
      >
        <Card style={{ width: "600px" }}>{children}</Card>
      </Grid>
    </Container>
  );
};

export default StepWrapper;
