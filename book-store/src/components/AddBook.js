import styled from "@emotion/styled";
import {
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
  TextField,
  Box
} from "@mui/material";

import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddBook = () => {
  const history = useNavigate();
  const [inputs, setInputs] = useState({
    name: "",
    description: "",
    price: "",
    author: "",
    image: "",
  });
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const sendRequest = async () => {
    await axios
      .post("https://simplescript-backend.onrender.com/books", {
        name: String(inputs.name),
        author: String(inputs.author),
        description: String(inputs.description),
        price: Number(inputs.price),
        image: String(inputs.image),
        available: Boolean(checked),
      })
      //
      .then((res) => res.data);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(inputs, checked);
    sendRequest().then(() => history("/books"));
  };

  return (


    <BackgroundDalo >
      <form onSubmit={handleSubmit} >
        <Box 
          display="flex"
          flexDirection="column"
          justifyContent={"center"}
          maxWidth={700}
          alignContent={"center"}
          alignSelf="center"
          marginLeft={"auto"}
          marginRight="auto"
          marginTop={10}
          color={"white"}
          className="boxx"
        >
          <Labell
          className="label">Name</Labell>
          <StyledTextField
            value={inputs.name}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="name"
          />
          <Labell
          className="label">Author</Labell>
          <StyledTextField
            value={inputs.author}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="author"
          />
          <Labell
          className="label">Description</Labell>
          <StyledTextField
            value={inputs.description}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="description"
          />
          <Labell
          className="label">Price</Labell>
          <StyledTextField
            value={inputs.price}
            onChange={handleChange}
            type="number"
            margin="normal"
            fullWidth
            variant="outlined"
            name="price"
          />
          <Labell
          className="label">Image</Labell>
          <StyledTextField
            value={inputs.image}
            onChange={handleChange}
            margin="normal"
            fullWidth
            variant="outlined"
            name="image"
          />
          {/* <FormControlLabel
            control={
              <Checkbox checked={checked} onChange={() => setChecked(!checked)} />
            }
            label="Available"
          /> */}

          <Button style={{marginTop:"1rem"}} variant="contained" type="submit">
            Add Book
          </Button>
        </Box>
      </form>
    </BackgroundDalo>
  );
};

export default AddBook;



//custom styling
const BackgroundDalo =styled(Box)`
width: 100%;
margin-left: auto;
margin-right: auto;
  box-shadow: 0 40px 20px rgba(0, 0, 0, 0.55), 0 2px 4px rgba(0, 0, 0, 0.55);
  padding: 20px 0;
  padding-bottom: 30px;
  

`




const Labell = styled(FormLabel)`
  color: white;
`;
//taking pre defined components and adding styles to them
const StyledTextField = styled(TextField)`
  & .MuiInputBase-root {
    color: white;
    border-color: white;
  }
  & .MuiOutlinedInput-notchedOutline {
    border-color: white;
  }
  & .MuiInputLabel-root {
    color: white;
  }
  & .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline {
    border-color: white;
  }
  & .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: white;
  }
`;
