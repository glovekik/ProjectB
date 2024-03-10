// Artist.js
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./artist.css";

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

const members = [
  {
    id: 1,
    name: "Leonardo da Vinci",
    imageSrc: "https://cdn.britannica.com/57/194757-050-FD0A1CAA/Portrait-Leonardo-da-Vinci.jpg",
    description: "painter sculptor",
    works: [
      {
        id: 1,
        imageUrl: "https://cdn.britannica.com/24/189624-050-F3C5BAA9/Mona-Lisa-oil-wood-panel-Leonardo-da.jpg",
        content: "Leonardo da Vinci, a Renaissance polymath, left an indelible mark on history through his diverse works. His paintings, including the enigmatic Mona Lisa and the iconic The Last Supper, showcase his mastery of composition and technique. Da Vinci's drawings, such as the Vitruvian Man and anatomical studies, reveal his profound understanding of human anatomy and geometry. Beyond art, he delved into engineering, inventing flying machines and hydraulic systems ahead of his time.",
      },
      // Add more works for Leonardo
    ],
  },
  // Add works for other members as well...
    // Previous members...
  
    {
      id: 2,
      name: "Michelangelo",
      imageSrc: "https://cdn.britannica.com/46/75046-050-0973B0E8/Michelangelo.jpg",
      description: "painter sculptor",
      works: [
        {
          id: 1,
          imageUrl: "https://news.artnet.com/app/news-upload/2017/11/last-judgement-michelangelo-930x1024.jpg",
          content: "Michelangelo Buonarroti, a titan of the Italian Renaissance, left an enduring legacy through his mastery of sculpture, painting, and architecture. His Sistine Chapel Ceiling frescoes, completed between 1508 and 1512, stand as a pinnacle of artistic achievement, depicting biblical narratives with unparalleled grandeur and depth. The marble statue of David, created between 1501 and 1504, epitomizes Michelangelo's ability to imbue stone with life, capturing the heroism and vulnerability of the biblical figure. The Pieta, completed in 1499, showcases his unparalleled skill in rendering the human form with emotional intensity, depicting the Virgin Mary mourning over the body of Jesus.",
        },
        // Add more works for Michelangelo
      ],
    },
    
    {
      id: 3,
      name: "Rembrandt",
      imageSrc: "https://cdn.britannica.com/82/190482-050-33D2C4C5/Self-Portrait-canvas-Rembrandt-van-Rijn-Washington-DC.jpg",
      description: "painter sculptor",
      works: [
        {
          id: 1,
          imageUrl: "https://www.artnews.com/wp-content/uploads/2021/02/SK-C-5.jpg?w=1200",
          content: "Rembrandt van Rijn, a Dutch master of the Baroque period, is renowned for his exceptional skill in painting, etching, and drawing. His works often explore themes of light and shadow, human emotion, and biblical narratives. Among his most famous paintings are The Night Watch, a dynamic group portrait depicting members of a civic militia, and The Anatomy Lesson of Dr. Nicolaes Tulp, which captures a vivid scene of scientific inquiry. Rembrandt's portraits are celebrated for their psychological depth and sensitivity, exemplified by works like Self-Portrait with Two Circles and Portrait of Jan Six. His etchings, such as The Three Crosses and Christ Preaching, demonstrate his mastery of the medium and his ability to convey profound religious and narrative themes with remarkable detail.",
        },
        // Add more works for Rembrandt
      ],
    },
    {
      id: 4,
      name: "Vermeer",
      imageSrc: "https://mariavermeer.com/Maria%20Vermeer%20at%20the%20window%20by%20JM%20Belaustegui.jpg",
      description: "painter sculptor",
      works: [
        {
          id: 1,
          imageUrl: "https://cdn.britannica.com/73/190473-050-28D1DEBA/Milkmaid-oil-canvas-Johannes-Vermeer-Rijksmuseum-Amsterdam-1660.jpg",
          content: "Johannes Vermeer, a Dutch Golden Age painter, is celebrated for his mastery of light, color, and composition. His small oeuvre consists of exquisitely detailed domestic scenes, often depicting middle-class life in 17th-century Netherlands. Vermeer's use of light to illuminate interiors, as seen in Girl with a Pearl Earring and The Milkmaid, creates an atmosphere of quiet intimacy and luminous beauty. His meticulous attention to detail and precise rendering of textures, such as in The Lacemaker and Woman Holding a Balance, showcase his technical virtuosity.",
        },
        // Add more works for Vermeer
      ],
    },
    {
      id: 5,
      name: "Jean-Antoine Watteau",
      imageSrc: "https://cdn.britannica.com/93/121193-050-E1B22332/Mezzetin-canvas-Antoine-Watteau-Metropolitan-Museum-of.jpg",
      description: "painter sculptor",
      works: [
        {
          id: 1,
          imageUrl: "https://m.media-amazon.com/images/I/51JZtVFkgWL.AC_UF894,1000_QL80.jpg",
          content: "Jean-Antoine Watteau, a French Rococo painter, is renowned for his elegant and evocative depictions of the fêtes galantes, outdoor entertainments of the French aristocracy. His paintings often feature elaborately dressed figures engaged in leisurely activities amidst lush landscapes or architectural settings. Watteau's signature style blends delicate brushwork, soft colors, and a sense of theatricality, as seen in works like Pilgrimage to Cythera and The Embarkation for Cythera. His ability to capture fleeting moments of romance, whimsy, and melancholy imbues his scenes with a sense of nostalgia and reverie.",
        },
        // Add more works for Watteau
      ],
    },
    {
      id: 6,
      name: "Amrita Sher-Gil",
      imageSrc: "https://www.india-a2z.com/images/raja-ravi-varma.jpg",
      description: "painter",
      works: [
        {
          id: 1,
          imageUrl: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Amrita_Sher-Gil_Group_of_Three_Girls.jpg/800px-Amrita_Sher-Gil_Group_of_Three_Girls.jpg",
          content: "Amrita Sher-Gil (1913–1941) was an influential Indian painter often regarded as one of the pioneers of modern Indian art. Born to a Hungarian mother and an Indian Sikh father, Sher-Gil's upbringing in both Europe and India deeply influenced her artistic style. Her works often depicted the lives of Indian people, particularly women, capturing their emotions, struggles, and the essence of their daily existence. Sher-Gil's art combined elements of Western realism with Indian themes, resulting in a unique and evocative aesthetic. She is celebrated for her bold use of color, fluid brushstrokes, and sensitive portrayal of human subjects.",
        },
        // Add more works for Amrita Sher-Gil
      ],
    },
    {
      id: 7,
      name: "Tyeb Mehta",
      imageSrc: "https://floriankappe.com/wp-content/uploads/2017/06/bühler.jpg",
      description: "painter",
      works: [
        {
          id: 1,
          imageUrl: "https://artfervour.com/wp-content/uploads/2022/11/120_file.png",
          content: "Tyeb Mehta was a prominent Indian modernist painter known for his powerful and emotive artworks that often explored themes of existential angst, violence, and the human condition. His distinctive style, characterized by bold lines, vibrant colors, and fragmented compositions, reflected the tumultuous sociopolitical climate of post-colonial India. Mehta's most iconic works include Triptych series, Kali series, and Diagonal series, where he employed recurring motifs such as the falling figure, the divided body, and the anguished face to convey a sense of inner turmoil and alienation.",
        },
        // Add more works for Tyeb Mehta
      ],
    },
    {
      id: 8,
      name: "M. F. Husain",
      imageSrc: "https://uploads7.wikiart.org/images/m-f-husain.jpg",
      description: "painter",
      works: [
        {
          id: 1,
          imageUrl: "https://i.pinimg.com/originals/35/a9/6b/35a96bf797f1d8056436d764bc401bc2.jpg",
          content: "Maqbool Fida Husain (1915–2011), commonly known as M.F. Husain, was one of India's most renowned and controversial artists. A prolific painter, he was often referred to as the Picasso of India. Husain's style was marked by bold colors, fluid lines, and a distinctive fusion of Indian mythology, culture, and contemporary themes. He gained international acclaim for his dynamic and expressive artworks, which ranged from vibrant depictions of Hindu deities to poignant reflections on social and political issues.",
        },
        // Add more works for M. F. Husain
      ],
    },
    {
      id: 9,
      name: "Jamini Roy",
      imageSrc: "https://upload.wikimedia.org/wikipedia/en/d/d8/Jaminiroy.jpg",
      description: "painter",
      works: [
        {
          id: 1,
          imageUrl: "https://static.toiimg.com/imagenext/toiblogs/photo/blogs/wp-content/uploads/2017/04/12174_Lot_643_Roy.jpg",
          content: "Jamini Roy (1887–1972) was an Indian artist celebrated for his unique style that combined traditional Indian folk art with modernist influences. Born in Beliatore village of Bankura district in West Bengal, India, Roy began his artistic journey by studying at the Government College of Art in Kolkata.",
        },
        // Add more works for Jamini Roy
      ],
    },
    {
      id: 10,
      name: "Abanindranath Tagore",
      imageSrc: "https://images.squarespace-cdn.com/content/v1/61a76dee225b8d381c48c4f4/ecbf3d7d-5760-4efa-a68c-357b41091d8e/abanindranath+tagore+artist+Profile.jpeg",
      description: "painter sculptor",
      works: [
        {
          id: 1,
          imageUrl: "https://mapacademy.io/wp-content/uploads/2022/04/Abanindranath-Tagore-The-Passing-of-Shah-Jahan-2m-highres-scaled.jpg",
          content: "Abindranath Tagore (1861–1941) was a towering figure in Indian literature, renowned for his prolific output across various genres. His most famous work, Gitanjali (Song Offerings), earned him the Nobel Prize in Literature in 1913, making him the first non-European to receive the honor. Tagore's poetic genius extended to numerous other collections, essays, and novels, including The Home and the World and Chokher Bali. As a playwright, his plays like Chitra and The Post Office explored complex themes of love, loss, and the human condition.",
        },
        // Add more works for Abanindranath Tagore
      ],
    },
    // Add more artist data as needed...
  ];
  


const WorksModal = ({ works, onClose }) => {
  return (
    <div className="works-modal">
      <div className="modal-content">
        <span className="close-btn" onClick={onClose}>
          &times;
        </span>
        <h2>Artist's Works</h2>
        <div className="works-container">
          {works.map((work) => (
            <div key={work.id} className="work">
              <img src={work.imageUrl} alt={`Work ${work.id}`} className="minimized-image" />
              <div className="work-content">
                <p className="work-description">{work.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

function Artist() {
  const [selectedWorks, setSelectedWorks] = useState(null);

  const openWorksModal = (works) => {
    setSelectedWorks(works);
  };

  const closeWorksModal = () => {
    setSelectedWorks(null);
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
        <h1>Artists </h1>
        <div className="card-container">
          {members.map((member) => (
            <div key={member.id} className="card" style={{ width: "18rem" }}>
              <img src={member.imageSrc} className="card-img-top" alt={`Image for ${member.name}`} />
              <div className="card-body">
                <h5 className="card-title">{member.name}</h5>
                <p className="card-text">{member.description}</p>
                <button className="btn btn-primary" onClick={() => openWorksModal(member.works)}>
                  Works
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="footer">Copyright @ART GALLERY. All Rights Reserved.</div>

      {selectedWorks && <WorksModal works={selectedWorks} onClose={closeWorksModal} />}
    </div>
  );
}

export default Artist;
