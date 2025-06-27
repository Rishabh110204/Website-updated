// Google Sheets API Configuration
// Replace these values with your actual Google API credentials

export const GOOGLE_SHEETS_CONFIG = {
  // Your Google API Key (from Google Cloud Console)
  API_KEY: 'AIzaSyDPWhQCxMem_5WI6Bnw2l6HglVVRnhrcv4',
  
  // Your Google Sheet ID (from the URL of your sheet)
  SHEET_ID: '1iwopEGmW6wjbHQ4I_blVvlQWYaSfxhk-CfiK3PMCrDI',
  
  // Your OAuth 2.0 Client ID (from Google Cloud Console)
  CLIENT_ID: '128638155579-gknrt55e4bi7sqtpisinsekn1ti8djbs.apps.googleusercontent.com',
  
  // Required scopes for Google Sheets API
  SCOPES: 'https://www.googleapis.com/auth/spreadsheets',
  
  // Discovery document for Google Sheets API
  DISCOVERY_DOCS: ['https://sheets.googleapis.com/$discovery/rest?version=v4']
};

// Instructions to get these credentials:
// 1. Go to https://console.cloud.google.com/
// 2. Create a new project or select existing one
// 3. Enable Google Sheets API
// 4. Create credentials:
//    - API Key: Go to "Credentials" > "Create Credentials" > "API Key"
//    - OAuth Client ID: Go to "Credentials" > "Create Credentials" > "OAuth 2.0 Client IDs"
//      - Application type: Web application
//      - Authorized JavaScript origins: Add your domain (e.g., http://localhost:3000)
//      - Authorized redirect URIs: Add your domain (e.g., http://localhost:3000)
// 5. Get your Sheet ID from the URL: https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/edit 