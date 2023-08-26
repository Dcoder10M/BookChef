import { Button } from "@mui/material";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import "./Book.css";
const Book = (props) => {
  const history = useNavigate();
  //destructuring
  const { _id, name, author, description, price, image } = props.book;
  const deleteHandler = async () => {
    await axios
      .delete(`https://simplescript-backend.onrender.com/books/${_id}`)
      .then((res) => res.data).then(() => {
        window.location.reload();
        return history("/books");
      });
  };
  
  return (
    <div className="card" style={{}}>
      <img src={image} alt={name} />
      <i style={{fontFamily: "'Dancing Script', cursive"}}>By {author}</i>
      <h3 style={{fontFamily: "'Cinzel', cursive"}}>{name}</h3>
      <span style={{fontFamily: "'Grandiflora One', cursive"}}>{description}</span>
      <h3 style={{fontFamily: "'Space Mono', cursive"}}>${price}</h3>
      <Button LinkComponent={Link} to={`/books/${_id}`} sx={{
        mt: "auto",
        backgroundColor: "#2196F3",
        color: "white",
        "&:hover": {
          transform: "scale(1.03)",
          backgroundColor: "#2196F3",
          transition: "transform 0.2s",

        },
        marginBottom: "5px"
      }} className="bbtn">
        Update
      </Button>
      <Button color="error" onClick={deleteHandler} sx={{
        mt: "auto",
        backgroundColor: "#f44336",
        color: "white",
        "&:hover": {
          transform: "scale(1.03)", 
          backgroundColor: "#f44336", 
          transition: "transform 0.2s",
        },
        

        }} className="bbtn">
      Delete
    </Button>
    </div >
  );
};

export default Book;