const express = require('express');
const multer = require('multer');
const tesseract = require('tesseract.js');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(bodyParser.json()); 

// Ensure uploads and templates directories exist
const UPLOADS_DIR = path.join(__dirname, 'uploads');
const TEMPLATES_DIR = path.join(__dirname, 'templates');

if (!fs.existsSync(UPLOADS_DIR)) fs.mkdirSync(UPLOADS_DIR, { recursive: true });
if (!fs.existsSync(TEMPLATES_DIR)) fs.mkdirSync(TEMPLATES_DIR, { recursive: true });

const upload = multer({ dest: UPLOADS_DIR });

const recognizedTexts = [];

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
    console.error('OCR Processing Error:', err);
    res.status(500).json({ error: 'Failed to process the image.' });
  });
});

// Fetch recognized texts
app.get('/api/ocr/data', (req, res) => {
  res.json(recognizedTexts);
});

// Sample Prescriptions
const prescriptions = [
  { id: 1, patientName: "John Smith", doctorName: "Dr. Adams", medication: "Paracetamol", followUpDate: "Feb 10, 2025" },
  { id: 2, patientName: "Emily Brown", doctorName: "Dr. Lee", medication: "Ibuprofen", followUpDate: "Mar 5, 2025" },
  { id: 3, patientName: "Lisa Green", doctorName: "Dr. Patel", medication: "Aspirin", followUpDate: "Apr 2, 2025" },
];

// Fetch prescription data
app.get('/api/prescriptions/:id', (req, res) => {
  const patientId = parseInt(req.params.id);
  const prescription = prescriptions.find(p => p.id === patientId);

  if (!prescription) {
    return res.status(404).json({ error: "Prescription not found" });
  }
  
  res.json(prescription);
});

// Save Form Template to a File
app.post('/api/generate-template', (req, res) => {
  const { patientName, doctorName, medication, followUpDate, notes } = req.body;

  if (!patientName || !doctorName || !medication || !followUpDate) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const templateData = {
    id: Date.now(),
    patientName,
    doctorName,
    medication,
    followUpDate,
    notes,
  };

  const filePath = path.join(TEMPLATES_DIR, `${templateData.id}.json`);

  fs.writeFile(filePath, JSON.stringify(templateData, null, 2), (err) => {
    if (err) {
      console.error('Error saving template:', err);
      return res.status(500).json({ error: 'Failed to save template' });
    }
    res.json({ message: 'Template saved successfully', data: templateData });
  });
});

// Fetch Stored Templates
app.get('/api/templates', (req, res) => {
  fs.readdir(TEMPLATES_DIR, (err, files) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to retrieve templates' });
    }

    const templates = files.map(file => {
      const filePath = path.join(TEMPLATES_DIR, file);
      const fileContent = fs.readFileSync(filePath);
      return JSON.parse(fileContent);
    });

    res.json(templates);
  });
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
