const express = require('express');
const cors = require('cors');
const { MongoClient } = require('mongodb');

const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port number ${PORT}`));

// MongoDB Configuration
const mongoUrl = "mongodb://localhost:27017";
const dbName = "projectb"; // Change this to your database name
const collectionName = "items"; // Chan5ge this to your collection name
const artistsCollection = "artists"
const feedbackCollection = "feedback"; // Change this to your collection name

const client = new MongoClient(mongoUrl);

// Connect to MongoDB
async function connectToMongo() {
  try {
    await client.connect();
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  }
}
connectToMongo();

// Registration Endpoint
app.post('/registration/signup', async (req, res) => {
  try {
    const { firstname, lastname, contactno, emailid, pwd, role } = req.body;

    if (!firstname || !lastname || !contactno || !emailid || !pwd || !role) {
      return res.status(400).json({ message: "All fields are required, including role." });
    }

    const db = client.db('projectb');
    const users = db.collection('users');
    const userExists = await users.findOne({ emailid });

    if (userExists) {
      return res.status(400).json({ message: "User with this email already exists." });
    }

    const data = await users.insertOne({ firstname, lastname, contactno, emailid, pwd, role });

    res.json({ message: "Registered successfully", userId: data.insertedId });
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error });
  }
});

// Login Endpoint with Role-Based Redirection
app.post('/login/signin', async (req, res) => {
  try {
    const { emailid, pwd, role } = req.body;

    if (!emailid || !pwd || !role) {
      return res.status(400).json({ message: "Email, password, and role are required." });
    }

    const db = client.db('projectb');
    const users = db.collection('users');

    const user = await users.findOne({ emailid, pwd });

    if (user) {
      let redirectPath;

      switch (role.toLowerCase()) {
        case 'admin':
          redirectPath = '/aadmin';
          break;
        case 'art_gallery_owner':
          redirectPath = '/ahome';
          break;
        case 'customer':
          redirectPath = '/home';
          break;
        default:
          return res.status(400).json({ message: "Invalid role" });
      }

      res.json({ success: true, redirectPath });
    } else {
      res.status(401).json({ success: false, message: "Invalid credentials or role mismatch" });
    }
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error });
  }
});

// Endpoint to Fetch User Details by Email
app.post('/home/uname', async (req, res) => {
  try {
    const { emailid } = req.body;

    const db = client.db('projectb');
    const users = db.collection('users');

    const user = await users.findOne({ emailid }, { projection: { firstname: 1, lastname: 1 } });

    if (user) {
      res.json({ firstname: user.firstname, lastname: user.lastname });
    } else {
      res.status(404).json({ message: "User not found" });
    }
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error });
  }
});

// Add item Endpoint
app.post('/add-item', async (req, res) => {
  try {
    const { photo, artName, artist, price, description } = req.body;

    if (!photo || !artName || !artist || !price || !description) {
      return res.status(400).json({ message: "All fields are required for adding an item." });
    }

    const db = client.db('projectb');
    const items = db.collection('items');

    const data = await items.insertOne({ photo, artName, artist, price, description });

    res.json({ message: "Item added successfully", itemId: data.insertedId });
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error });
  }
});

// Fetch all items Endpoint
app.get('/items', async (req, res) => {
  try {
    const db = client.db('projectb');
    const items = db.collection('items');

    const data = await items.find({}).toArray();

    res.json(data);
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error });
  }
});

app.post('/add-artist', async (req, res) => {
    try {
      const { photo, name, designation, works } = req.body;
  
      if (!photo || !name || !designation || !works) {
        return res.status(400).json({ message: "All fields are required for adding an artist." });
      }
  
      const db = client.db('projectb');
      const artists = db.collection('artists');
  
      const data = await artists.insertOne({ photo, name, designation, works });
  
      res.json({ message: "Artist added successfully", artistId: data.insertedId });
    } catch (error) {
      res.status(500).json({ error: "Server error", details: error });
    }
  });


  //MY PROFILE
app.post('/myprofile/info', async function(req, res){
  try
  {
      conn = await client.connect();
      db = conn.db('projectb');
      users = db.collection('users');
      data = await users.find(req.body).toArray();
      conn.close();
      res.json(data);
  }catch(err)
  {
      res.json(err).status(404);
  }
});

//FILE UPLOAD
app.post('/uploaddp', async function(req, res){
  try
  {
      if(!req.files)
          return res.json("File not found");

      let myfile = req.files.myfile;
      var fname = req.body.fname;
      myfile.mv('../src/images/photo/'+ fname +'.jpg', function(err){
          if(err)
              return res.json("File upload operation failed!");

          res.json("File uploaded successfully...");
      });

      conn = await client.connect();
      db = conn.db('projectb');
      users = db.collection('users');
      data = await users.updateOne({emailid: fname},{$set : {imgurl: fname + '.jpg'}});
      conn.close();
  }catch(err)
  {
      res.json(err).status(404);
  }
});

// Feedback Endpoint
app.post('/submit-feedback', async (req, res) => {
  try {
    const { name, email, phone, city, state, zip, message, receiveNewsletter } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: "Name, email, and message are required fields." });
    }

    const db = client.db('projectb');
    const feedback = db.collection('feedback');

    await feedback.insertOne({ name, email, phone, city, state, zip, message, receiveNewsletter });

    res.json({ message: "Feedback submitted successfully" });
  } catch (error) {
    console.error("Error submitting feedback:", error);
    res.status(500).json({ error: "Server error" });
  }
});


// Endpoint to fetch feedback data
app.get('/admin/feedback', async (req, res) => {
  try {
    const db = client.db('projectb');
    const feedbackCollection = db.collection('feedback');
    const feedbackData = await feedbackCollection.find({}).toArray();
    res.json(feedbackData);
  } catch (error) {
    res.status(500).json({ error: "Server error", details: error });
  }
});

  

//EMAIL NOTIFICATION
app.post('/sendemail', async function(req, res){
  try {
      const { from, to, subject, text } = req.body;

      var transport = nodemailer.createTransport({
          service: "gmail",
          host: "smtp.gmail.com",
          port: 465,
          secure: true,
          auth: { user: "gudivadalovekik@gmail.com", pass: "kvdxalwtkgxsxemx" }
      });

      var emaildata = {
          from: from,
          to: to,
          subject: subject,
          text: text
      };

      transport.sendMail(emaildata, function(err, info){
          if(err)
              return res.status(500).json("Failed to send email");

          res.json("Email sent successfully");
      });
  } catch (err) {
      res.status(500).json(err);
  }
});


app.post("/orders", (req, res) => {
  const order = req.body;

  // Write order data to a file
  fs.appendFile("orders.json", JSON.stringify(order) + "\n", (err) => {
    if (err) {
      console.error("Error writing to file:", err);
      res.status(500).json({ error: "Internal server error" });
    } else {
      res.status(200).json({ message: "Order placed successfully" });
    }
  });
});

