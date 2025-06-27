# Fix Google OAuth Verification Issue

## Current Problem
You're getting this error:
```
Access blocked: sheets-accessor has not completed the Google verification process
Error 403: access_denied
```

This happens because your Google Cloud project's OAuth consent screen is not properly configured for development.

## Solution: Configure OAuth Consent Screen for Development

### Step 1: Go to Google Cloud Console
1. Open [Google Cloud Console](https://console.cloud.google.com/)
2. Select your project (the one with your API credentials)

### Step 2: Configure OAuth Consent Screen
1. Go to **APIs & Services** > **OAuth consent screen**
2. You should see your app "sheets-accessor" listed

### Step 3: Set User Type to External (if not already)
1. Click on your app name
2. Under **User Type**, make sure it's set to **External**
3. Click **Save and Continue**

### Step 4: Add Test Users
1. Scroll down to **Test users** section
2. Click **Add Users**
3. Add your email address: **transformerwebsite@gmail.com**
4. You can also add other email addresses that need access
5. Click **Save and Continue**

### Step 5: Review and Publish
1. Review the summary
2. Click **Back to Dashboard**
3. Your app should now show as "Testing" status

## Alternative Solution: Use Internal User Type

If you only need access for your own Google account:

### Step 1: Change User Type
1. Go to **OAuth consent screen**
2. Click **Edit App**
3. Change **User Type** from **External** to **Internal**
4. Click **Save and Continue**

### Step 2: Verify Domain (if required)
1. If prompted, verify your domain ownership
2. Or skip this step if you're using a personal Google account

## Quick Fix: Add Your Email as Test User

The fastest solution is to add your email as a test user:

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Navigate to **APIs & Services** > **OAuth consent screen**
3. Click on your app
4. Scroll to **Test users**
5. Click **Add Users**
6. Add: `transformerwebsite@gmail.com`
7. Click **Save**

## Test the Fix

After making these changes:

1. **Wait 5-10 minutes** for changes to propagate
2. **Clear your browser cache** or open an incognito window
3. **Go to your React app**: http://localhost:3000
4. **Try signing in again** with Google

## Expected Result

After adding your email as a test user, you should see:
- ✅ Google sign-in popup appears
- ✅ No more "access_denied" error
- ✅ Successful authentication
- ✅ Your Google Sheet data loads

## If Still Having Issues

1. **Check the OAuth consent screen status** - should show "Testing" or "Published"
2. **Verify your email is in test users** - make sure it's exactly `transformerwebsite@gmail.com`
3. **Check OAuth client ID** - ensure it matches what's in your config file
4. **Wait longer** - sometimes changes take up to 30 minutes to propagate

## Production Deployment

For production, you'll need to:
1. Complete Google's verification process
2. Or keep the app in testing mode and add all user emails as test users
3. Or use Internal user type if all users are in your organization

The app should work perfectly once you add your email as a test user! 