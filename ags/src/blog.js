import React from "react";
import { Link } from "react-router-dom";
import "./blog.css";

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
  blogs: {
    float: "right",
    paddingRight: "15px",
    cursor: "pointer",
  },
  painting: {
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
};

const cardData = [
  {
    id: 1,
    imageUrl: "https://hifructose.com/wp-content/uploads/2024/01/FOR-SITE1for-lola-CROPPED-NO-BARDOCE-HF-V69-FINAL-FRONT-COVER-LOLA-1.jpg",
    title: "Hi-Fructose",
    content: "Hi-Fructose was founded by two artists by the name of Attaboy and Annie Owen in the year 2005.",
    buttonLink: "https://hifructose.com/",
  },
  {
    id: 2,
    imageUrl: "https://www.artnews.com/wp-content/uploads/2024/03/GettyImages-1389936070.jpg",
    title: "ARTnews Magazine",
    content: "Artnews is the oldest art magazine in the world.",
    buttonLink: "https://www.artnews.com/",
  },
  {
    id: 3,
    imageUrl: "https://www.artlex.com/wp-content/uploads/2022/10/cropped-Artlex-Logo-Desktop-Small.png",
    title: "ArtLex",
    content: "ArtLex was founded in 1998 as a comprehensive Art Dictionary.",
    buttonLink: "https://www.artlex.com/",
  },
  {
    id: 4,
    imageUrl: "https://www.artforum.com/wp-content/uploads/2023/10/artforum.jpg?w=1000",
    title: "Artforum",
    content: "Artforum is a New York-based art blog. It revolves around contemporary art and publishes enlightening critiques of visual art exhibitions.",
    buttonLink: "https://www.artforum.com/",
  },
  {
    id: 5,
    imageUrl: "https://img.artlogic.net/w_1000,h_1000,c_limit/exhibit-e/5da4b461a5aa2c47128b4567/3f630cbecb0da8a2950f6fd7448a795e.jpeg",
    title: "Contemporary Art ",
    content: "Daily As the name suggests, this blog publishes content that talks about contemporary art. Started in the month of November in 2008, readers can expect a minimum of 3 posts from them every day",
    buttonLink: "https://www.contemporaryartdaily.com/",
  },
  // Repeat similar objects for cards 2 to 10 with unique data
];

function Blog() {
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
          <Link to="/painting" style={styles.painting}>
            Painting
          </Link>
          <Link to="/blog" style={styles.blogs}>
            Blogs
          </Link>
          <Link to="/artist" style={styles.artist}>
            Artists
          </Link>
        </div>
      </div>

      <div className="content1">
        <h1>Blogs</h1>
        <div className="blog-container-horizontal">
          {cardData.map((card) => (
            <div key={card.id} className="card" style={{ width: "18rem", margin: "10px" }}>
              <img src={card.imageUrl} className="card-img-top" alt={`Image ${card.id}`} />
              <div className="card-body">
                <h5 className="card-title">{card.title}</h5>
                <p className="card-text">{card.content}</p>
                <a href={card.buttonLink} className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="footer">Copyright @ART GALLERY. All Rights Reserved.</div>
    </div>
  );
}

export default Blog;
