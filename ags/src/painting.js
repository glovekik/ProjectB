// Shopping.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';
import './painting.css';

const styles = {
  header: {
    float: 'left',
    height: '45px',
    marginTop: '6px',
  },
  artist: {
    float: 'right',
    paddingRight: '30px',
    cursor: 'pointer',
  },
  blogs: {
    float: 'right',
    paddingRight: '15px',
    cursor: 'pointer',
  },
  painting: {
    float: 'right',
    paddingRight: '20px',
    cursor: 'pointer',
  },
  logout: {
    float: 'right',
    paddingRight: '30px',
    cursor: 'pointer',
  },
  profile: {
    float: 'right',
    paddingRight: '25px',
    cursor: 'pointer',
  },
};

const cardsData = [
  {
    id: 1,
    imageUrl: 'https://i.ytimg.com/vi/dXM6i5-sdVg/maxresdefault.jpg',
    content: 'In every walk with nature, one receives far more than he seeks. - John Muir',
  },
  {
    id: 2,
    imageUrl: "https://cdn.pixabay.com/photo/2017/02/01/22/02/mountain-landscape-2031539_1280.jpg",
    content: "The mountains are calling and I must go. - John Muir",
  },
  {
    id: 3,
    imageUrl: "https://i.pinimg.com/originals/c2/a7/27/c2a7277df0419711d8377ae8817e4e3a.jpg",
    content: "The clearest way into the Universe is through a forest wilderness. - John Muir",
  },
  {
    id: 4,
    imageUrl: "https://i.pinimg.com/originals/55/7c/88/557c88a38c7fd34f2af8645b67d6a0fe.png",
    content: "Nature is not a place to visit. It is home. - Gary Snyder",
  },
  {
    id: 5,
    imageUrl: "https://images.hdqwalls.com/download/mountains-digital-art-minimalist-l9-1280x720.jpg",
    content: "The earth has music for those who listen. - William Shakespeare",
  },
  {
    id: 6,
    imageUrl: "https://i.pinimg.com/originals/df/d6/29/dfd6295110ed7bc2c3e4e611365a2c82.jpg",
    content: "The mountains are alive with the sound of music. - Oscar Hammerstein II",
  },
  {
    id: 7,
    imageUrl: "https://wallpapercave.com/wp/wp4470740.jpg",
    content: "May your trails be crooked, winding, lonesome, dangerous, leading to the most amazing view. May your mountains rise into and above the clouds. - Edward Abbey",
  },
  {
    id: 8,
    imageUrl: "https://i.pinimg.com/originals/60/53/64/605364731155b9c3643da99d121319d5.jpg",
    content: "A great city is that which has the greatest men and women. - Walt Whitman",
  },
  {
    id: 9,
    imageUrl: "https://wallpaperswide.com/download/mountain_32-wallpaper-1280x720.jpg",
    content: "The city is not a concrete jungle. It is a human zoo. - Desmond Morris",
  },
  {
    id: 10,
    imageUrl: "https://www.hdwallpapers.in/download/majestic_mountain_range_at_sunrise_sunset_warm_hues_painting_the_peaks_and_valleys_in_breathtaking_colors_scene_captures_the_grandeur_hd_nature-1280x720.jpg",
    content: "A great city is not to be confounded with a populous one. - Aristotle",
  },
  {
    id: 11,
    imageUrl: "https://i.ytimg.com/vi/n5vqCaKL0Aw/maxresdefault.jpg",
    content: "Cities have always been the fireplaces of civilization, whence light and heat radiated out into the dark. - Theodore Parker",
  },
  {
    id: 12,
    imageUrl: "https://i.ytimg.com/vi/PoAAh7X5EPY/maxresdefault.jpg",
    content: "The city is a strange and wondrous place, full of bustling streets and towering skyscrapers, where dreams are born and destinies are forged. - Neil Gaiman",
  },
  {
    id: 13,
    imageUrl: "https://i.ytimg.com/vi/tsQyMtIIXxc/maxresdefault.jpg",
    content: "The city is a restless creature, forever changing and evolving, a reflection of the hopes and aspirations of its inhabitants. - Italo Calvino",
  },
  {
    id: 14,
    imageUrl: "https://www.wallpaperflare.com/static/28/567/746/night-cityscape-colorful-city-wallpaper.jpg",
    content: "The earth has music for those who listen.- William Shakespeare",
  },
  {
    id: 15,
    imageUrl: "https://b.stablecog.com/5908fe13-0565-45eb-9b9b-d24e2c49620f.jpeg",
    content: "Adopt the pace of nature: her secret is patience. - Ralph Waldo Emerson",
  },
];



const ImageModal = ({ imageUrl, onClose }) => {
  return (
    <div className="image-modal">
      <div className="modal-content">
        <span className="close-btn" onClick={onClose}>&times;</span>
        <img src={imageUrl} alt="Enlarged Image" className="enlarged-image" />
      </div>
    </div>
  );
};

function Shopping() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openImageModal = (imageUrl) => {
    setSelectedImage(imageUrl);
  };

  const closeImageModal = () => {
    setSelectedImage(null);
  };

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
        <h1>Painting-The wall of Quotes</h1>
        <div className="card-container">
          {cardsData.map((card) => (
            <div key={card.id} className="card" style={{ width: '18rem', marginRight: '15px' }}>
              <img
                src={card.imageUrl}
                className="card-img-top"
                alt={`Image ${card.id}`}
                onClick={() => openImageModal(card.imageUrl)}
                style={{ cursor: 'pointer' }}
              />
              <div className="card-body">
                <p className="card-text">{card.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="footer">Copyright @ART GALLERY. All Rights Reserved.</div>

      {selectedImage && <ImageModal imageUrl={selectedImage} onClose={closeImageModal} />}
    </div>
  );
}

export default Shopping;
