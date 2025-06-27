# 🚀 Deployment Guide

This guide will help you deploy your website to Vercel (frontend) and Railway (backend).

## 📋 Prerequisites

1. **GitHub Account** - Your code should be in a GitHub repository
2. **Vercel Account** - Sign up at [vercel.com](https://vercel.com)
3. **Railway Account** - Sign up at [railway.app](https://railway.app)
4. **Google Cloud Project** - For Google Sheets API access

## 🔧 Backend Deployment (Railway)

### Step 1: Prepare Backend for Railway

1. **Navigate to the backend directory:**
   ```bash
   cd trafo-backend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Test locally:**
   ```bash
   npm start
   ```

### Step 2: Deploy to Railway

1. **Go to [Railway Dashboard](https://railway.app/dashboard)**

2. **Create a new project:**
   - Click "New Project"
   - Select "Deploy from GitHub repo"
   - Choose your repository
   - Select the `trafo-backend` directory

3. **Set Environment Variables:**
   - Go to your project settings
   - Navigate to "Variables" tab
   - Add the following variables:

   ```
   GOOGLE_SHEET_ID=your_actual_sheet_id
   GOOGLE_SERVICE_ACCOUNT={"type":"service_account",...}
   ```

4. **For GOOGLE_SERVICE_ACCOUNT:**
   - Copy the entire content of your `service-account.json` file
   - Paste it as a single line in the Railway environment variable
   - Make sure to escape quotes properly

5. **Deploy:**
   - Railway will automatically detect the Node.js app
   - It will install dependencies and start the server
   - Note the generated URL (e.g., `https://your-app-name.railway.app`)

### Step 3: Test Backend

1. **Test the health endpoint:**
   ```
   https://your-app-name.railway.app/api/health
   ```

2. **Test Google Sheets API:**
   ```
   https://your-app-name.railway.app/api/sheets/Pricing
   ```

## 🌐 Frontend Deployment (Vercel)

### Step 1: Prepare Frontend for Vercel

1. **Navigate to the root directory:**
   ```bash
   cd ..
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Build the project:**
   ```bash
   npm run build
   ```

### Step 2: Deploy to Vercel

1. **Go to [Vercel Dashboard](https://vercel.com/dashboard)**

2. **Import your GitHub repository:**
   - Click "New Project"
   - Import your GitHub repository
   - Vercel will auto-detect it's a React app

3. **Configure the project:**
   - **Framework Preset:** Create React App
   - **Root Directory:** `./` (root of repository)
   - **Build Command:** `npm run build`
   - **Output Directory:** `build`
   - **Install Command:** `npm install`

4. **Set Environment Variables:**
   - Go to Project Settings → Environment Variables
   - Add:
   ```
   REACT_APP_BACKEND_URL=https://your-railway-app-name.railway.app
   ```

5. **Deploy:**
   - Click "Deploy"
   - Vercel will build and deploy your app
   - You'll get a URL like `https://your-app-name.vercel.app`

## 🔗 Connect Frontend to Backend

1. **Update the backend URL in Vercel:**
   - Go to your Vercel project settings
   - Navigate to Environment Variables
   - Set `REACT_APP_BACKEND_URL` to your Railway URL

2. **Redeploy the frontend:**
   - Vercel will automatically redeploy with the new environment variable

## 🧪 Testing the Deployment

1. **Test the frontend:**
   - Visit your Vercel URL
   - Navigate to the Pricing or Costing pages
   - Try editing some cells

2. **Check for errors:**
   - Open browser developer tools
   - Check the Console and Network tabs
   - Verify API calls are going to your Railway backend

## 🔧 Troubleshooting

### Common Issues:

1. **CORS Errors:**
   - Make sure your Railway backend has CORS enabled (already configured)
   - Check that the frontend URL is allowed

2. **Google Sheets API Errors:**
   - Verify your service account has access to the Google Sheet
   - Check that the sheet ID is correct
   - Ensure the service account JSON is properly formatted in Railway

3. **Environment Variables:**
   - Double-check all environment variables are set correctly
   - Remember to redeploy after changing environment variables

4. **Build Errors:**
   - Check the build logs in Vercel
   - Ensure all dependencies are properly installed

### Debugging Steps:

1. **Check Railway logs:**
   - Go to your Railway project
   - Click on "Deployments" to see logs

2. **Check Vercel logs:**
   - Go to your Vercel project
   - Click on "Functions" to see serverless function logs

3. **Test API endpoints directly:**
   - Use tools like Postman or curl to test your Railway endpoints

## 📝 Environment Variables Summary

### Railway (Backend):
```
GOOGLE_SHEET_ID=your_sheet_id
GOOGLE_SERVICE_ACCOUNT=your_service_account_json
PORT=5000 (auto-set by Railway)
```

### Vercel (Frontend):
```
REACT_APP_BACKEND_URL=https://your-railway-app-name.railway.app
```

## 🎉 Success!

Once deployed, your website will be accessible at:
- **Frontend:** `https://your-app-name.vercel.app`
- **Backend:** `https://your-app-name.railway.app`

Both services will automatically redeploy when you push changes to your GitHub repository! 