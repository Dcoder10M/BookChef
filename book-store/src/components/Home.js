import { Button, Typography, Box } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Box display="flex" flexDirection="column" alignItems="center">
        <Button
          LinkComponent={Link}
          to="/books"
          sx={{
            marginTop: 15,
            padding: 5,
            borderRadius: 10,
            background: "rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(255, 255, 255, 0.2)",
            "&:hover": {
              transform: "scale(1.1)",
              background: "rgba(255, 255, 255, 0.2)",

              transition: "transform 0.5s",

            },
          }}
          variant="contained"
        >
          <Typography
            variant="h3"
            sx={{ color: "white", textShadow: "1px 1px 2px rgba(0, 0, 0, 0.3)" }}
            style={{fontFamily: "'Caprasimo', cursive"}}>
            View All products
          </Typography>
        </Button>
      </Box>
    </div>
  );
};

export default Home;
