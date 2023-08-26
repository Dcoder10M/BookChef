import styled from "@emotion/styled";
import {
  Box,
  Button,
  Checkbox,
  FormControlLabel,
  FormLabel,
  TextField,
} from "@mui/material";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BookDetail = () => {
  const [inputs, setInputs] = useState();
  const id = useParams().id;
  const [checked, setChecked] = useState(false);
  const history = useNavigate();
  useEffect(() => {
    const fetchHandler = async () => {
      await axios
        .get(`https://simplescript-backend.onrender.com/books/${id}`)
        .then((res) => res.data)
        .then((data) => setInputs(data.book));
    };
    fetchHandler();
  }, [id]);

  const sendRequest = async () => {
    await axios
      .put(`https://simplescript-backend.onrender.com/books/${id}`, {
        name: String(inputs.name),
        author: String(inputs.author),
        description: String(inputs.description),
        price: Number(inputs.price),
        image: String(inputs.image),
        available: Boolean(checked),
      })
      .then((res) => res.data);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    sendRequest().then(() => history("/books"));
  };
  const handleChange = (e) => {
    setInputs((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <BackgroundDalo>
      {inputs && (
        <form onSubmit={handleSubmit}>
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
          >
            <Labell>Name</Labell>
            <StyledTextField
              value={inputs.name}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="name"
            />
            <Labell>Author</Labell>
            <StyledTextField
              value={inputs.author}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="author"
            />
            <Labell>Description</Labell>
            <StyledTextField
              value={inputs.description}
              onChange={handleChange}
              margin="normal"
              fullWidth
              variant="outlined"
              name="description"
            />
            <Labell>Price</Labell>
            <StyledTextField
              value={inputs.price}
              onChange={handleChange}
              type="number"
              margin="normal"
              fullWidth
              variant="outlined"
              name="price"
            />
            <Labell>Image</Labell>
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
                <Checkbox
                  checked={checked}
                  onChange={() => setChecked(!checked)}
                />
              }
              label="Available"
            /> */}

            <Button style={{marginTop:"1rem"}} variant="contained" type="submit">
              Update Book
            </Button>
          </Box>
        </form>
      )}
    </BackgroundDalo>
  );
};

export default BookDetail;

const BackgroundDalo = styled(Box)`
${'' /* width: 100%;
margin-left: auto;
margin-right: auto; */}

${'' /* backdrop-filter: blur(10px);
  background-color: rgba(255, 255, 255, 0.2); */}
  /* Add box shadow */
  ${'' /* box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px 0;
  padding-bottom: 30px; */}
  width: 100%;
margin-left: auto;
margin-right: auto;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 20px 0;
  padding-bottom: 30px;

`




const Labell = styled(FormLabel)`
  color: white;
`;

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