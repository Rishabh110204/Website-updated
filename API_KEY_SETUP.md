# API Key Setup for Google Sheets (No Sign-in Required)

## Current Status
✅ **No Google Sign-in Required** - The app now works with just your API key!
✅ **Simpler Setup** - No OAuth configuration needed
✅ **Direct Access** - Uses Google Sheets API directly

## Important: Configure API Key Permissions

Your API key needs to be configured to allow writing to Google Sheets. Here's how:

### Step 1: Go to Google Cloud Console
1. Open [Google Cloud Console](https://console.cloud.google.com/)
2. Select your project

### Step 2: Configure API Key Restrictions
1. Go to **APIs & Services** > **Credentials**
2. Find your API key: `AIzaSyDPWhQCxMem_5WI6Bnw2l6HglVVRnhrcv4`
3. Click on the API key to edit it

### Step 3: Set Application Restrictions
1. Under **Application restrictions**, select **HTTP referrers (web sites)**
2. Add your domain: `http://localhost:3000/*`
3. For production, add your actual domain

### Step 4: Set API Restrictions
1. Under **API restrictions**, select **Restrict key**
2. Select **Google Sheets API** from the dropdown
3. Click **Save**

### Step 5: Enable Google Sheets API
1. Go to **APIs & Services** > **Library**
2. Search for "Google Sheets API"
3. Click on it and make sure it's **Enabled**

## Configure Google Sheet Permissions

### Option 1: Make Sheet Public (Easiest)
1. Open your Google Sheet: https://docs.google.com/spreadsheets/d/1fM0GypRvKiGLuCKSpbnXeRiInNhC6D9OORAQ4ytY0tI/edit
2. Click **Share** button (top right)
3. Click **Change to anyone with the link**
4. Set permission to **Editor**
5. Click **Done**

### Option 2: Use Service Account (More Secure)
1. Go to **APIs & Services** > **Credentials**
2. Click **Create Credentials** > **Service Account**
3. Download the JSON key file
4. Share your Google Sheet with the service account email

## Test Your Setup

1. **Refresh your React app**: http://localhost:3000
2. **Navigate to Costing or Pricing tab**
3. **Data should load automatically** (no sign-in required)
4. **Click on any cell to edit it**
5. **Press Enter to save changes**

## Expected Behavior

✅ **Automatic Data Loading** - Sheet data loads when page opens
✅ **No Authentication Required** - Works immediately
✅ **Real-time Editing** - Click cells to edit inline
✅ **Instant Updates** - Changes save to Google Sheet immediately
✅ **Refresh Button** - Click to reload data from sheet

## Troubleshooting

### If you get "403 Forbidden" error:
1. **Check API key restrictions** - Make sure Google Sheets API is enabled
2. **Check sheet permissions** - Make sure sheet is shared or public
3. **Verify API key** - Ensure the key in your config is correct

### If you get "404 Not Found" error:
1. **Check sheet ID** - Verify the sheet ID is correct
2. **Check sheet tabs** - Make sure "Costing" and "Pricing" tabs exist

### If data doesn't load:
1. **Check browser console** (F12) for error messages
2. **Verify API key** - Make sure it's not restricted too much
3. **Check sheet sharing** - Ensure the sheet is accessible

## Security Notes

- **API Key is visible** in the frontend code (this is normal for public sheets)
- **For production**, consider using a service account for better security
- **Restrict API key** to only your domain and Google Sheets API
- **Monitor usage** in Google Cloud Console

## Success!

Once configured, your app will:
- ✅ Load Google Sheet data automatically
- ✅ Allow editing without any sign-in
- ✅ Save changes in real-time
- ✅ Work immediately when you open the page

The setup is much simpler now - just configure your API key permissions and you're ready to go! 