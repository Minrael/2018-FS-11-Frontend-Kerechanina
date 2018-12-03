const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();

// default options
app.use(fileUpload());

app.post('/message', function(req, res) {
  //var result = Promise.resolve();
  if (req.body != null) {
    return res.status(200).send('{"status":"ok"}');
  }
  if (req.files != null) {
    if (Object.keys(req.files).length == 0) {
      return res.status(400).send('No files were uploaded.');
    }
    let sampleFile = req.files.attach;

    console.log(sampleFile.mimetype, sampleFile.md5());

	result = new Promise((resolve, reject) => {
      sampleFile.mv('/dev/null', function (err) {
        if (err) reject(err);
		else resolve();
	  });
    });
  }
  result
    .then(() => res.send('{"status":"ok"}'))
    .catch((err) => res.status(500).send(err));

});


app.post('/', function(req, res) {
	res.send('POST request to the homepage');
});

app.get('/', function(req, res) {
	res.send('Hello world!');
});

app.listen('8081');
