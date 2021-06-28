//import modules installed at the previous step. We need them to run Node.js server and send emails
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
var os = require('os');
var networkInterfaces = os.networkInterfaces();



// create a new Express application instance
const app = express();

//configure the Express middleware to accept CORS requests and parse request body into JSON
app.use(cors({origin: "*" }));
app.use(bodyParser.json());

app.use(express.static('./dist/quicklabs'));

app.get('/*', function(req, res) {
  res.sendFile('index.html', {root: 'dist/quicklabs/'});
});

app.listen(process.env.PORT || 3000, () => {
  console.log('listening on port 3000');
  console.log(networkInterfaces);
});


/*
//start application server on port 3000
app.listen(3000, () => {
  console.log("The server started on port 3000");
});


app.get("/", (req, res) => {
    res.send(
"<h1>Welcome to quicklabs</h1>"
    );
});

// define a sendmail endpoint, which will send emails and response with the corresponding status
app.post("/sendmail", (req, res) => {
  console.log("request came");
  let user = req.body;
  sendMail(user, (err, info) => {
    if (err) {
      console.log(err);
      res.status(400);
      res.send({ error: "Failed to send email" });
    } else {
      console.log("Email has been sent");
      res.send(info);
    }
  });
});



async function sendMail(user, callback) {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: "<quicklabs@gamil.com>",
        pass: "<quicklabs1234>"
      }
    });
  }



  let mailOptions = {
  from: `"<Quicklabs>", <quicklabs0@gmail.com>`,
  to:"udomajohn21@gmail.com",
  subject: "<Message subject>",
  html: "<h1>And here is the place for HTML</h1>"
};

let info =transporter.sendMail(mailOptions);
callback(info);

*/