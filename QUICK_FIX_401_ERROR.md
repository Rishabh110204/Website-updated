# Quick Fix for 401 Unauthorized Error

## The Problem
You're getting a 401 error when trying to edit cells because API keys can only READ Google Sheets, not WRITE to them.

## Solution 1: Make Your Sheet Public (5 minutes)

### Step 1: Open Your Google Sheet
1. Go to: https://docs.google.com/spreadsheets/d/1fM0GypRvKiGLuCKSpbnXeRiInNhC6D9OORAQ4ytY0tI/edit

### Step 2: Make it Public
1. Click the **Share** button (top right corner)
2. Click **Change to anyone with the link**
3. Set permission to **Editor**
4. Click **Done**

### Step 3: Test
1. Refresh your React app: http://localhost:3000
2. Try editing a cell - should work now!

## Solution 2: Use Service Account (More Secure)

If you want better security, create a service account:

### Step 1: Create Service Account
1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Navigate to **APIs & Services** > **Credentials**
3. Click **Create Credentials** > **Service Account**
4. Give it a name like "sheets-editor"
5. Click **Create and Continue**
6. Skip role assignment, click **Done**

### Step 2: Create and Download Key
1. Click on your new service account
2. Go to **Keys** tab
3. Click **Add Key** > **Create new key**
4. Choose **JSON** format
5. Download the JSON file

### Step 3: Share Sheet with Service Account
1. Open your Google Sheet
2. Click **Share**
3. Add the service account email (found in the JSON file)
4. Give it **Editor** permissions
5. Click **Done**

### Step 4: Update Your Code
Replace the API key approach with service account authentication.

## Quick Test

After making your sheet public:

1. **Open your React app**: http://localhost:3000
2. **Go to Costing or Pricing tab**
3. **Click on any cell**
4. **Type something and press Enter**
5. **Check your Google Sheet** - the change should appear there

## Expected Result

✅ **No more 401 errors**
✅ **Cells can be edited**
✅ **Changes save to Google Sheet**
✅ **Real-time updates work**

## If Still Having Issues

1. **Check sheet permissions** - Make sure it's set to "Anyone with link can edit"
2. **Verify sheet ID** - Ensure the ID is correct
3. **Check API key** - Make sure Google Sheets API is enabled
4. **Clear browser cache** - Sometimes cached errors persist

## Security Note

Making the sheet public means anyone with the link can edit it. For production use, consider:
- Using a service account
- Implementing user authentication
- Restricting access to specific users

The public sheet approach is perfect for development and testing! 