import React, { useState } from "react";
import { AppBar, Box, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import LibraryBooksOutlinedIcon from "@mui/icons-material/LibraryBooksOutlined";
import { NavLink } from "react-router-dom";
import styled from "@emotion/styled";

const Header = () => {
  const [value, setValue] = useState();

  return (
    <Container>
      <AppBar sx={{
        mt: "auto",
        backgroundColor: "rgba(255, 255, 255, 0.2)", // Change the background color
        backdropFilter: "blur(10px)", // Add backdrop filter
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.1)", // Add box shadow
        color: "white",
        
      }} position="sticky">
        <Toolbar>
          <NavLink to="/" style={{ color: "white" }}>
            <Typography>
              <LibraryBooksOutlinedIcon />
            </Typography>
          </NavLink>
          <Tabs
            sx={{ ml: "auto" }}
            textColor="inherit"
            indicatorColor="primary"
            value={value}
            onChange={(e, val) => setValue(val)}
          >
            <Tab LinkComponent={NavLink} to="/add" label="Add product" />
            <Tab LinkComponent={NavLink} to="/books" label="Books" />
            <Tab LinkComponent={NavLink} to="/about" label="About Us" />
          </Tabs>
        </Toolbar>
      </AppBar>
    </Container>
  );
};

export default Header;


//custom styling
const Container = styled(Box)`
  /* Apply a hover effect on the Tab elements */
  .MuiTabs-root .MuiTab-root:hover {
    background-color: rgba(255, 255, 255, 0.2); /* Change to the desired hover background color */
    border-radius: 10px;
  }
`;
