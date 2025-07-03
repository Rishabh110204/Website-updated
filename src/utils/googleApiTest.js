// Google API Test Utility
// This file helps test and debug Google API connectivity

export const testGoogleApiConfig = () => {
  const config = {
    API_KEY: 'AIzaSyDPWhQCxMem_5WI6Bnw2l6HglVVRnhrcv4',
    SHEET_ID: '1iwopEGmW6wjbHQ4I_blVvlQWYaSfxhk-CfiK3PMCrDI',
    CLIENT_ID: '128638155579-gknrt55e4bi7sqtpisinsekn1ti8djbs.apps.googleusercontent.com'
  };

  console.log('Google API Configuration:');
  console.log('API Key:', config.API_KEY ? '✅ Set' : '❌ Missing');
  console.log('Sheet ID:', config.SHEET_ID ? '✅ Set' : '❌ Missing');
  console.log('Client ID:', config.CLIENT_ID ? '✅ Set' : '❌ Missing');

  // Test if gapi is available
  if (typeof gapi !== 'undefined') {
    console.log('Google API (gapi): ✅ Available');
  } else {
    console.log('Google API (gapi): ❌ Not available');
  }

  return config;
};

export const validateSheetId = (sheetId) => {
  // Basic validation for Google Sheet ID format
  const sheetIdPattern = /^[a-zA-Z0-9-_]+$/;
  return sheetIdPattern.test(sheetId) && sheetId.length > 20;
};

export const getSheetUrl = (sheetId) => {
  return `https://docs.google.com/spreadsheets/d/${sheetId}/edit`;
}; 