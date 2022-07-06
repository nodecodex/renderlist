import {  Typography, Box, Grid, } from "@mui/material/";
import { deepPurple,} from "@mui/material/colors";
import List from "./renderlist/List";
const Home = () => {
  return (
    <>
      <Box
        textAlign="center"
        sx={{ backgroundColor: deepPurple[400], color: "white" }}
        p={2}
      >
        <Typography variant="h3">React List Render App</Typography>
      </Box>
      <Grid container justifyContent={"center"} spacing={4}>
       
        {/* Rander list */}
        <Grid item md={6} xs={12}>
          <List />
        </Grid>
      </Grid>
    </>
  );
};

export default Home;
