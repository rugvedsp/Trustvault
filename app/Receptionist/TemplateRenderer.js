import React from "react";
import { Alert, Button, View } from "react-native";
import * as Print from "expo-print";
import * as Sharing from "expo-sharing"; // For sharing the PDF

const generatePDF = async ({ patientName, doctorName, medication, followUpDate, notes }) => {
  // HTML template for the PDF
  const html = `
    <html>
      <head>
        <style>
          body {
            font-family: Arial, sans-serif;
            background-color: #ffffff;
            padding: 20px;
            color: #000000;
          }
          h1 {
            text-align: center;
            color: #000000;
            margin-top: 40px;
            font-size: 28px;
            font-weight: bold;
          }
          .container {
            margin: 40px auto;
            padding: 20px;
            background-color: #ffffff;
            border: 2px solid #000000;
            border-radius: 10px;
            width: 80%;
            max-width: 600px;
          }
          .field {
            margin-bottom: 15px;
            font-size: 16px;
            font-weight: 600;
            color: #000000;
          }
          .field .value {
            font-weight: 400;
            color: #000000;
          }
          footer {
            text-align: center;
            margin-top: 30px;
            font-size: 14px;
            color: #000000;
          }
        </style>
      </head>
      <body>
        <h1>Doctor's Prescription</h1>
        <div class="container">
          <div class="field">
            <strong>Patient Name:</strong> <span class="value">${patientName}</span>
          </div>
          <div class="field">
            <strong>Doctor Name:</strong> <span class="value">${doctorName}</span>
          </div>
          <div class="field">
            <strong>Medication:</strong> <span class="value">${medication}</span>
          </div>
          <div class="field">
            <strong>Follow-Up Date:</strong> <span class="value">${followUpDate}</span>
          </div>
          <div class="field">
            <strong>Notes:</strong> <span class="value">${notes}</span>
          </div>
        </div>
        <footer>
          <p>Thank you for choosing our services!</p>
        </footer>
      </body>
    </html>
  `;

  try {
    // Generate the PDF
    const { uri } = await Print.printToFileAsync({ html });
    console.log("PDF generated at:", uri);

    // Optionally share the PDF
    if (await Sharing.isAvailableAsync()) {
      await Sharing.shareAsync(uri);
    } else {
      Alert.alert("PDF Generated", "PDF has been saved and is available at: " + uri);
    }
  } catch (error) {
    console.error("Error generating PDF:", error);
    Alert.alert("Error", "Failed to create the PDF.");
  }
};

// React Component to Trigger PDF Generation
const TemplateRenderer = ({ patientName, doctorName, medication, followUpDate, notes }) => {
  console.log("wow");
  
  const handleGeneratePDF = () => {
    generatePDF({
      patientName, doctorName, medication, followUpDate, notes
    });
  };

  return (
    <View style={{ padding: 20 }}>
      <Button title="Generate PDF" onPress={handleGeneratePDF} />
    </View>
  );
};

export default TemplateRenderer;
