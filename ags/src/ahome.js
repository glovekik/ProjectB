import React from "react";
import { Link } from "react-router-dom";
import "./home.css";

const styles = {
  header: {
    float: "left",
    height: "45px",
    marginTop: "6px",
  },
  artist: {
    float: "right",
    paddingRight: "30px",
    cursor: "pointer",
  },
  orders: {
    float: "right",
    paddingRight: "15px",
    cursor: "pointer",
  },
  mygallery: {
    float: "right",
    paddingRight: "20px",
    cursor: "pointer",
  },
  logout: {
    float: "right",
    paddingRight: "30px",
    cursor: "pointer",
  },
  profile: {
    float: "right",
    paddingRight: "25px",
    cursor: "pointer",
  },
  leftBlock: {
    width: "50%",
    height: "450px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(65, 105, 225, 0.5)",
  },
  rightBlock: {
    width: "50%",
    height: "450px",
    padding: "20px",
    boxSizing: "border-box",
    backgroundColor: "rgba(65, 105, 225, 0.5)",
  },
  galleryInfoContent: {
    fontSize: "16px",
    lineHeight: "1.6",
  },
};

const imageLinks = [
  "https://i.pinimg.com/564x/18/39/14/183914020d15005e33783b8c4e4429df.jpg",
  "https://i.pinimg.com/564x/b8/49/8e/b8498edc0c2a9a1139f4840a4cd354b9.jpg",
  "https://i.pinimg.com/564x/dc/91/d3/dc91d3b0b7a7445b6edb2b74e85c55f9.jpg",
];

function Home() {
  return (
    <div className="full-height">
      <div className="header">
        <label style={styles.header}>Art Gallery</label>
        <div className="left-side">
          <Link to="/" style={styles.logout}>
            Logout
          </Link>
          <Link to="/profile" style={styles.profile}>
            Profile
          </Link>
          <Link to="/mygallery" style={styles.mygallery}>
            My Gallery
          </Link>
          <Link to="/orders" style={styles.orders}>
           Orders
          </Link>
          <Link to="/artist" style={styles.artist}>
            Artists
          </Link>
        </div>
      </div>

      <div className="content1">
        <div className="left-block" style={styles.leftBlock}>
          <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner">
              {imageLinks.map((link, index) => (
                <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`}>
                  <img src={link} className="d-block w-100" alt={`Art ${index + 1}`} />
                </div>
              ))}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleSlidesOnly" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>

        <div className="right-block" style={styles.rightBlock}>
          <div style={styles.galleryInfoContent}>
            <h2>Art Gallery</h2>
            <p>Entering the art world can seem scary at first, but once you understand the basics of what you see in public, you will be one step closer to pushing forward your art career. This article will discuss the meaning behind what an art gallery is and the difference between an art gallery and an art museum. We will also take a look at the various types of art galleries you may come across and what you can do to engage further with these institutional spaces.</p>
          </div>
        </div>
      </div>

      <div className="footer">Copyright @ART GALLERY. All Rights Reserved.</div>
    </div>
  );
}

export default Home;
