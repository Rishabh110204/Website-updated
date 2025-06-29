# Google Sheets API Setup Guide

## Current Issue
The Google Sheets API is returning a 400 error, which means there's an issue with the API key, spreadsheet permissions, or configuration.

## Quick Fix Steps

### 1. Check Google Sheets Permissions
Make sure your Google Sheet is set to "Anyone with the link can view":
1. Open your Google Sheet: `1iwopEGmW6wjbHQ4I_blVvlQWYaSfxhk-CfiK3PMCrDI`
2. Click "Share" in the top right
3. Change from "Restricted" to "Anyone with the link"
4. Set permission to "Viewer"
5. Click "Done"

### 2. Verify API Key
The current API key might be invalid or restricted. To get a new one:

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project or select existing one
3. Enable Google Sheets API:
   - Go to "APIs & Services" > "Library"
   - Search for "Google Sheets API"
   - Click "Enable"

4. Create API Key:
   - Go to "APIs & Services" > "Credentials"
   - Click "Create Credentials" > "API Key"
   - Copy the new API key

5. Restrict the API Key (Recommended):
   - Click on the created API key
   - Under "Application restrictions" select "HTTP referrers"
   - Add your domain: `https://your-vercel-app.vercel.app/*`
   - Under "API restrictions" select "Restrict key"
   - Select "Google Sheets API"
   - Click "Save"

### 3. Set Environment Variables

#### For Local Development:
Create a `.env` file in your project root:
```env
REACT_APP_GOOGLE_SHEETS_ID=1iwopEGmW6wjbHQ4I_blVvlQWYaSfxhk-CfiK3PMCrDI
REACT_APP_GOOGLE_API_KEY=your_new_api_key_here
REACT_APP_GOOGLE_CLIENT_ID=your_client_id_here
```

#### For Vercel Deployment:
1. Go to your Vercel dashboard
2. Select your project
3. Go to "Settings" > "Environment Variables"
4. Add these variables:
   - `REACT_APP_GOOGLE_SHEETS_ID`: `1iwopEGmW6wjbHQ4I_blVvlQWYaSfxhk-CfiK3PMCrDI`
   - `REACT_APP_GOOGLE_API_KEY`: Your new API key
   - `REACT_APP_GOOGLE_CLIENT_ID`: Your client ID
5. Redeploy your application

### 4. Test the API
You can test the API directly in your browser:
```
https://sheets.googleapis.com/v4/spreadsheets/1iwopEGmW6wjbHQ4I_blVvlQWYaSfxhk-CfiK3PMCrDI/values/Sheet1?key=YOUR_NEW_API_KEY
```

If it returns JSON data, the API is working correctly.

## Current Status
- ✅ Debug popup removed
- ✅ Error handling improved in all components
- ✅ Fallback to demo data when API fails
- ✅ Better error messages for debugging

## Next Steps
1. Follow the setup guide above
2. Set the environment variables
3. Redeploy to Vercel
4. Test the application

The application will now show demo data if the Google Sheets API fails, so users can still see the interface while you fix the API configuration.

## Prerequisites

1. A Google account
2. A Google Sheet that you want to connect to
3. Basic knowledge of Google Cloud Console

## Step 1: Create a Google Cloud Project

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Click on "Select a project" at the top
3. Click "New Project"
4. Enter a project name (e.g., "My Website Sheets")
5. Click "Create"

## Step 2: Enable Google Sheets API

1. In your new project, go to the navigation menu (☰)
2. Select "APIs & Services" > "Library"
3. Search for "Google Sheets API"
4. Click on "Google Sheets API"
5. Click "Enable"

## Step 3: Create API Key

1. Go to "APIs & Services" > "Credentials"
2. Click "Create Credentials" > "API Key"
3. Copy the API key (you'll need this later)
4. Click "Restrict Key" to secure it:
   - Application restrictions: HTTP referrers
   - Add your domain: `http://localhost:3000/*` (for development)
   - API restrictions: Restrict key to "Google Sheets API"

## Step 4: Create OAuth 2.0 Client ID

1. In "Credentials", click "Create Credentials" > "OAuth 2.0 Client IDs"
2. If prompted, configure the OAuth consent screen:
   - User Type: External
   - App name: Your app name
   - User support email: Your email
   - Developer contact information: Your email
   - Save and continue through the steps
3. Back to creating OAuth client ID:
   - Application type: Web application
   - Name: Your app name
   - Authorized JavaScript origins: `http://localhost:3000`
   - Authorized redirect URIs: `http://localhost:3000`
4. Click "Create"
5. Copy the Client ID (you'll need this later)

## Step 5: Get Your Sheet ID

1. Open your Google Sheet
2. Look at the URL: `https://docs.google.com/spreadsheets/d/YOUR_SHEET_ID/edit`
3. Copy the `YOUR_SHEET_ID` part (it's a long string of letters and numbers)

## Step 6: Configure Your Application

1. Open `src/config/googleSheets.js`
2. Replace the placeholder values:
   ```javascript
   export const GOOGLE_SHEETS_CONFIG = {
     API_KEY: 'your-actual-api-key-here',
     SHEET_ID: 'your-actual-sheet-id-here',
     CLIENT_ID: 'your-actual-client-id-here',
     SCOPES: 'https://www.googleapis.com/auth/spreadsheets',
     DISCOVERY_DOCS: ['https://sheets.googleapis.com/$discovery/rest?version=v4']
   };
   ```

## Step 7: Set Up Your Google Sheet

1. Make sure your Google Sheet has sheets named "Costing" and "Pricing"
2. Share the sheet with your Google account (or make it public for testing)
3. Ensure you have edit permissions

## Step 8: Test the Integration

1. Start your React application: `npm start`
2. Navigate to the Costing or Pricing page
3. Click "Sign in with Google"
4. Grant permissions when prompted
5. You should see your sheet data displayed
6. Click on any cell to edit it
7. Press Enter or click outside to save changes

## Troubleshooting

### Common Issues:

1. **"API key not valid" error:**
   - Check that your API key is correct
   - Ensure the API key is restricted to Google Sheets API
   - Make sure billing is enabled (if required)

2. **"Client ID not valid" error:**
   - Verify your OAuth client ID is correct
   - Check that `http://localhost:3000` is in authorized origins
   - Ensure the OAuth consent screen is configured

3. **"Access denied" error:**
   - Make sure you're signed in with the correct Google account
   - Check that the sheet is shared with your account
   - Verify you have edit permissions on the sheet

4. **"Sheet not found" error:**
   - Verify the sheet ID is correct
   - Ensure the sheet exists and is accessible
   - Check that the sheet has "Costing" and "Pricing" tabs

### Security Notes:

- Never commit your API keys to version control
- Use environment variables in production
- Restrict your API keys to specific domains
- Regularly rotate your credentials

## Production Deployment

For production deployment:

1. Update authorized origins in Google Cloud Console to include your production domain
2. Use environment variables for API keys
3. Consider implementing additional security measures
4. Test thoroughly before going live

## Features

The implementation includes:

- ✅ Real-time editing of Google Sheets
- ✅ Authentication with Google OAuth
- ✅ Automatic data refresh
- ✅ Inline cell editing
- ✅ Keyboard shortcuts (Enter to save, Escape to cancel)
- ✅ Loading states and error handling
- ✅ Responsive design with Tailwind CSS

## Support

If you encounter issues:

1. Check the browser console for error messages
2. Verify all credentials are correct
3. Ensure your Google Cloud project is properly configured
4. Check that the Google Sheets API is enabled 