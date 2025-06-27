const express = require('express');
const cors = require('cors');
const { google } = require('googleapis');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Load service account credentials from environment or file
let serviceAccount;
if (process.env.GOOGLE_SERVICE_ACCOUNT) {
  serviceAccount = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT);
} else {
  serviceAccount = require('./service-account.json');
}

// Configure Google Sheets API
const auth = new google.auth.GoogleAuth({
  credentials: serviceAccount,
  scopes: ['https://www.googleapis.com/auth/spreadsheets'],
});

const sheets = google.sheets({ version: 'v4', auth });

// Your Google Sheet ID from environment variable
const SHEET_ID = process.env.GOOGLE_SHEET_ID || '1iwopEGmW6wjbHQ4I_blVvlQWYaSfxhk-CfiK3PMCrDI';

// Routes
app.get('/api/sheets/:sheetName', async (req, res) => {
  try {
    const { sheetName } = req.params;
    const range = `${sheetName}!A:Z`;
    
    console.log(`Fetching data from ${range}`);
    
    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: SHEET_ID,
      range: range,
    });

    const values = response.data.values || [];
    console.log(`Fetched ${values.length} rows from ${sheetName}`);
    
    res.json({ values });
  } catch (error) {
    console.error('Error fetching sheet data:', error);
    res.status(500).json({ 
      error: 'Failed to fetch sheet data',
      details: error.message 
    });
  }
});

app.put('/api/sheets/:sheetName/:cell', async (req, res) => {
  try {
    const { sheetName, cell } = req.params;
    const { value } = req.body;
    
    const range = `${sheetName}!${cell}`;
    
    console.log(`Updating ${range} with value: ${value}`);
    
    const response = await sheets.spreadsheets.values.update({
      spreadsheetId: SHEET_ID,
      range: range,
      valueInputOption: 'USER_ENTERED',
      resource: {
        values: [[value]]
      }
    });

    console.log(`Successfully updated ${range}`);
    
    res.json({ 
      success: true, 
      updatedRange: response.data.updatedRange,
      updatedCells: response.data.updatedCells
    });
  } catch (error) {
    console.error('Error updating cell:', error);
    res.status(500).json({ 
      error: 'Failed to update cell',
      details: error.message 
    });
  }
});

// Health check
app.get('/api/health', (req, res) => {
  res.json({ status: 'OK', message: 'Backend is running' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Sheet ID: ${SHEET_ID}`);
});
