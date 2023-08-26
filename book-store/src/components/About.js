import React from 'react';

const About = () => {
  const containerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    margin: "0 10px"
  };

  const contentStyle = {
    maxWidth: '800px',
    padding: '20px',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
    fontSize: "1.2rem",
    fontFamily: "'Rokkitt', serif",
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    backdropFilter: "blur(10px)"
  };
  return (
    <div style={containerStyle}>
      <div style={contentStyle}>
        <h1 style={{fontFamily: 'Lobster' , margin:"0 0 2rem 0"}}>About Us</h1>
        <hr />
        <p style={{margin:"2rem 0 0rem 0"}}>Welcome to BookChef, your go-to destination for discovering and enjoying a vast collection of novels!</p>
        <p>At BookChef, we are passionate about bringing the magic of storytelling to your fingertips. Our platform is dedicated to providing a haven for book enthusiasts, offering an immersive experience that transports you to different worlds, cultures, and perspectives through the power of literature.</p>
        <p>Whether you're a seasoned reader or just starting to explore the world of novels, you'll find an array of genres and titles that cater to your interests. From gripping mysteries and heartwarming romances to thrilling adventures and thought-provoking literary works, our curated selection has something for everyone.</p>
        <p>Join us on this literary adventure, where every novel is a gateway to new experiences and insights. Whether you're curling up with a book on a cozy evening or exploring new horizons during your daily commute, BookChef is here to accompany you on your reading odyssey.</p>
        <p>Thank you for being a part of our community. Together, let's celebrate the joy of reading and embrace the boundless worlds that await within the pages of a novel.</p>
        
        <p style={{margin:"2rem 0 0rem 0"}}>Happy reading!</p>
      </div>
        
    </div>
  );
};

export default About;
