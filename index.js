const express = require('express');
const multer = require('multer');
const tesseract = require('tesseract.js');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json()); // To parse JSON requests
const upload = multer({ dest: './app/auth/uploads' }); 

const recognizedTexts = [];
const templates = []; // Store received form templates

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the OCR API server. Use /api/ocr for image processing.');
});

// OCR Image Processing
app.post('/api/ocr', upload.single('image'), (req, res) => {
  const imagePath = req.file.path;

  tesseract.recognize(imagePath, 'eng', {
    logger: info => console.log(info),
  })
  .then(({ data: { text } }) => {
    recognizedTexts.push({ imagePath, text });
    res.json({ text });
  })
  .catch(err => {
    console.error(err);
    res.status(500).json({ error: 'Failed to process the image.' });
  });
});

const prescriptions = [
  { id: 1, patientName: "John Smith", doctorName: "Dr. Adams", medication: "Paracetamol", followUpDate: "Feb 10, 2025" },
  { id: 2, patientName: "Emily Brown", doctorName: "Dr. Lee", medication: "Ibuprofen", followUpDate: "Mar 5, 2025" },
  { id: 3, patientName: "Lisa Green", doctorName: "Dr. Patel", medication: "Aspirin", followUpDate: "Apr 2, 2025" },
];

// **API to fetch prescription data**
app.get('/api/prescriptions/:id', (req, res) => {
  const patientId = parseInt(req.params.id);
  const prescription = prescriptions.find(p => p.id === patientId);

  if (!prescription) {
    return res.status(404).json({ error: "Prescription not found" });
  }
  console.log(prescription)
  res.json(prescription);
});

// Fetch recognized texts
app.get('/api/ocr/data', (req, res) => {
  console.log(recognizedTexts);
  res.json(recognizedTexts);
});

// **New Route to Receive Form Template Data**
app.post('/api/generate-template', (req, res) => {
  const { patientName, doctorName, medication, followUpDate, notes } = req.body;

  if (!patientName || !doctorName || !medication || !followUpDate) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const templateData = {
    id: templates.length + 1,
    patientName,
    doctorName,
    medication,
    followUpDate,
    notes,
  };

  templates.push(templateData);
  console.log('Received Template:', templateData);

  res.json({ message: 'Template received successfully', data: templateData });
});

// Fetch stored templates
app.get('/api/templates', (req, res) => {
  res.json(templates);
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
