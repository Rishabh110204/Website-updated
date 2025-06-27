# Google Sheets API Troubleshooting Guide

## Current Status
Your React application is running on **http://localhost:3000** but experiencing Google API initialization issues.

## Quick Debug Steps

### 1. Check Browser Console
1. Open your browser and go to **http://localhost:3000**
2. Press **F12** to open Developer Tools
3. Go to the **Console** tab
4. Look for the configuration test output:
   ```
   Testing Google API configuration...
   Google API Configuration:
   API Key: ✅ Set
   Sheet ID: ✅ Set  
   Client ID: ✅ Set
   Google API (gapi): ✅ Available
   Sheet URL: https://docs.google.com/spreadsheets/d/1fM0GypRvKiGLuCKSpbnXeRiInNhC6D9OORAQ4ytY0tI/edit
   ```

### 2. Verify Your Google Sheet
1. Open this URL: **https://docs.google.com/spreadsheets/d/1fM0GypRvKiGLuCKSpbnXeRiInNhC6D9OORAQ4ytY0tI/edit**
2. Make sure the sheet exists and you have access to it
3. Verify it has tabs named "Costing" and "Pricing"

### 3. Check Google Cloud Console
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Select your project
3. Go to **APIs & Services** > **Credentials**
4. Verify your API key and OAuth client ID are correct
5. Check that Google Sheets API is enabled

## Common Issues and Solutions

### Issue 1: "Google API not loaded"
**Solution:**
- Check your internet connection
- Make sure you're not blocking Google's domains
- Try refreshing the page

### Issue 2: "API key not valid"
**Solution:**
- Verify your API key in Google Cloud Console
- Make sure the API key is restricted to Google Sheets API
- Check that billing is enabled (if required)

### Issue 3: "Client ID not valid"
**Solution:**
- Verify your OAuth client ID in Google Cloud Console
- Make sure `http://localhost:3000` is in authorized origins
- Check that the OAuth consent screen is configured

### Issue 4: "Access denied"
**Solution:**
- Make sure you're signed in with the correct Google account
- Check that the sheet is shared with your account
- Verify you have edit permissions on the sheet

### Issue 5: "Sheet not found"
**Solution:**
- Verify the sheet ID is correct
- Make sure the sheet exists and is accessible
- Check that the sheet has "Costing" and "Pricing" tabs

## Testing Your Setup

### Step 1: Test Sheet Access
1. Open your Google Sheet directly
2. Add some test data to the "Costing" tab
3. Make sure you can edit the sheet

### Step 2: Test API Access
1. Go to [Google Sheets API Explorer](https://developers.google.com/apis-explorer/#p/sheets/v4/)
2. Try to fetch data from your sheet using your API key
3. Verify the API calls work

### Step 3: Test OAuth
1. Go to your React app
2. Click "Sign in with Google"
3. Grant permissions when prompted
4. Check if authentication succeeds

## Debug Information

Your current configuration:
- **API Key**: AIzaSyDPWhQCxMem_5WI6Bnw2l6HglVVRnhrcv4
- **Sheet ID**: 1fM0GypRvKiGLuCKSpbnXeRiInNhC6D9OORAQ4ytY0tI
- **Client ID**: 128638155579-gknrt55e4bi7sqtpisinsekn1ti8djbs.apps.googleusercontent.com

## Next Steps

1. **Check the browser console** for detailed error messages
2. **Verify your Google Sheet** exists and is accessible
3. **Test the API credentials** in Google Cloud Console
4. **Try the application** and report any specific error messages

## Getting Help

If you're still having issues:
1. Copy the exact error messages from the browser console
2. Check if your Google Sheet is accessible
3. Verify your API credentials are correct
4. Make sure you have the necessary permissions

The application should work once the Google API initialization issues are resolved! 