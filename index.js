const express = require('express');
const multer = require('multer');
const tesseract = require('tesseract.js');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
const upload = multer({ dest: './app/auth/uploads' }); 

const recognizedTexts = [];

// Root route to handle ⁠ / ⁠
app.get('/', (req, res) => {
  res.send('Welcome to the OCR API server. Use /api/ocr for image processing.');
});

// Route to handle image upload and OCR
app.post('/api/ocr', upload.single('image'), (req, res) => {
  const imagePath = req.file.path;

  tesseract.recognize(
    imagePath,
    'eng', 
    {
      logger: info => console.log(info) 
    }
  ).then(({ data: { text } }) => {
    recognizedTexts.push({ imagePath, text });
    res.json({ text });
  }).catch(err => {
    console.error(err);
    res.status(500).json({ error: 'Failed to process the image.' });
  });
});

// Route to fetch recognized texts
app.get('/api/ocr/data', (req, res) => {
  console.log(recognizedTexts);
  res.json(recognizedTexts);
});

// Start the server = node indexjs
// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
  